import mongoose, { Schema } from 'mongoose'
import moment from 'moment'

const sermonSchema = new Schema({
  title: {
    type: String
  },
  location: {
    type: String
  },
  time: {
    type: String
  },
  date: {
    type: Date
  },
  hashtags: {
    type: String
  },
  image: {
    type: String
  },
  messages: {
    type: String
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

sermonSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      title: this.title,
      location: this.location,
      time: this.time,
      date: moment(this.date).format('YYYY-MM-DD'),
      hashtags: this.hashtags,
      image: this.image,
      messages: this.messages,
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

const model = mongoose.model('Sermon', sermonSchema)

export const schema = model.schema
export default model
