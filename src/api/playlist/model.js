import mongoose, { Schema } from 'mongoose'
import moment from 'moment'

const playlistSchema = new Schema({
  date: {
    type: Date
  },
  songs: {
    type: Array
  },
  user: {
    type: Object
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

playlistSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      date: moment(this.date).format('YYYY-MM-DD'),
      songs: this.songs,
      user: this.user,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Playlist', playlistSchema)

export const schema = model.schema
export default model
