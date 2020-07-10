import mongoose, { Schema } from 'mongoose'

const livestreamsSchema = new Schema({
  url: {
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

livestreamsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      url: this.url,
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

const model = mongoose.model('Livestreams', livestreamsSchema)

export const schema = model.schema
export default model
