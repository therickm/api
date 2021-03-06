import mongoose, { Schema } from 'mongoose'
import moment from 'moment'

const quoteSchema = new Schema({
  verse: {
    type: String
  },
  application: {
    type: String
  },

  quote: {
    type: String
  },
  lessons: {
    type: String
  },
  date: {
    type: Date
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

quoteSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      verse: this.verse,
      application: this.application,
      lessons: this.lessons,
      date: moment(this.date).format('YYYY-MM-DD'),
      user: this.user,
      quote: this.quote,
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
