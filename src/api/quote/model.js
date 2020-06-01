import mongoose, { Schema } from 'mongoose'

const quoteSchema = new Schema({
  verse: {
    type: String
  },
  application: {
    type: String
  },
  lessons: {
    type: String
  },
  date: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

quoteSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      verse: this.verse,
      application: this.application,
      lessons: this.lessons,
      date: this.date,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Quote', quoteSchema)

export const schema = model.schema
export default model