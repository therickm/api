import mongoose, { Schema } from 'mongoose'

const eventSchema = new Schema({
  name: {
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
  description: {
    type: String
  },
  user: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

eventSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      location: this.location,
      time: this.time,
      date: this.date,
      hashtags: this.hashtags,
      customFile: this.customFile,
      description: this.description,
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

const model = mongoose.model('Event', eventSchema)

export const schema = model.schema
export default model
