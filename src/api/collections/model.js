import mongoose, { Schema } from 'mongoose'

const collectionsSchema = new Schema({
  ac_name: {
    type: String
  },
  ac_number: {
    type: String
  },
  bank_name: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

collectionsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      ac_name: this.ac_name,
      ac_number: this.ac_number,
      bank_name: this.bank_name,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Collections', collectionsSchema)

export const schema = model.schema
export default model
