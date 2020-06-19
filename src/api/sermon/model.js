import mongoose, { Schema } from 'mongoose'

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
    type: String
  },
  hashtags: {
    type: String
  },
  customFile: {
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
  view(full) {
    const view = {
      // simple view
      id: this.id,
      title: this.title,
      location: this.location,
      time: this.time,
      date: this.date,
      hashtags: this.hashtags,
      customFile: this.customFile,
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
