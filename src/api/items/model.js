import mongoose, { Schema } from 'mongoose'

const itemsSchema = new Schema({
  name: {
    type: String
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  unit_price: {
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

itemsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      description: this.description,
      unit_price: this.unit_price,
      user: this.user,
      image:this.image,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Items', itemsSchema)

export const schema = model.schema
export default model
