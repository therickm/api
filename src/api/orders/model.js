import mongoose, { Schema } from 'mongoose'

const ordersSchema = new Schema({
  item: {
    type: String
  },
  quntity: {
    type: String
  },
  customer: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

ordersSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      item: this.item,
      quntity: this.quntity,
      customer: this.customer,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Orders', ordersSchema)

export const schema = model.schema
export default model
