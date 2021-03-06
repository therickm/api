import mongoose, { Schema } from 'mongoose'

const cellSchema = new Schema({
  name: {
    type: String
  },
  leader: {
    type: String
  },
  phone: {
    type: String
  },
  location: {
    type: String
  },
  image: {
    type: String
  },
  description: {
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

cellSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      leader: this.leader,
      phone: this.phone,
      pacInput: this.location,
      image:this.image,
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

const model = mongoose.model('Cell', cellSchema)

export const schema = model.schema
export default model
