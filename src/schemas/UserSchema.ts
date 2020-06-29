import { Schema } from 'mongoose'
import GenderEnum from '../enums/GenderEnum';
import { IUser } from '../interfaces/IUser';

const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    lowercase: true,
    maxlength: 100,
    index: true,
    unique: true
  },
  name: {
    type: String,
    lowercase: true,
    required: true,
    maxlength: 35
  },
  password: {
    type: String,
    required: true,
    maxlength: 100,
    lowercase: true
  },
  gender: {
    type: String,
    enum: Object.values(GenderEnum),
    required: true
  }
}, {
  timestamps: true
})

export default UserSchema;
