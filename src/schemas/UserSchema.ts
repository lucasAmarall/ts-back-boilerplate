import { Schema } from 'mongoose'

const UserSchema = new Schema({
  mail: {
    type: String,
    required: true,
    lowercase: true,
    maxlength: 50,
    index: true,
    unique: true
  },
  firstName: {
    type: String,
    lowercase: true,
    required: true,
    maxlength: 20
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 20,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    maxlength: 100,
    lowercase: true
  },
  photoId: {
    type: String,
    required: false,
    maxlength: 200,
    lowercase: true
  }
}, {
  timestamps: true
})

export default UserSchema;
