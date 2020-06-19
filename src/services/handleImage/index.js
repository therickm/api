
import Image from '../../services/image'

const removeCurrentPhotos = (initiative) => {
    const sizes = Object.keys(initiative.photo.toObject())
    const promises = []
    if (sizes.length) {
        // istanbul ignore next
        promises.push(sizes.map((size) => s3.remove(initiative.photo[size])))
    }
    return Promise.all(promises)
}

const uploadResizedPhotos = (image) => {
    const uniqueId = uid(24)
    const getFileName = (size) => `${uniqueId}_${size}.jpg`
    const sizes = {
        large: [1024, 768],
        medium: [640, 480],
        small: [320, 240]
    }
    const promises = Object.keys(sizes).reduce((object, size) => {
        object[size] = image.clone().quality(80).scaleToFit(...sizes[size]).getBuffer()
        return object
    }, {})
    return Promise.props(promises).then((buffers) =>
        Promise.props(
            Object.keys(buffers).reduce((object, size) => {
                object[size] = s3.upload(buffers[size], getFileName(size), 'image/jpeg')
                return object
            }, {})
        )
    )
}

export const updatePhoto = ({ user, params, file }, res, next) =>
    Initiative.findById(params.id)
        .then(notFound(res))
        .then(authorOrAdmin(res, user, 'user'))
        .then((initiative) => {
            if (!initiative) return null
            removeCurrentPhotos(initiative)
            return Image.read(file.buffer).then((image) => {
                initiative.color = image.getPredominantColorHex()
                return uploadResizedPhotos(image)
            }).then((photo) => {
                initiative.photo = photo
                return initiative.save()
            })
        })
        .then((initiative) => initiative ? initiative.view() : null)
        .then(success(res))
        .catch(next)