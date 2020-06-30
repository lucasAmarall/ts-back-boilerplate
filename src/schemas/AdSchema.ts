import { Schema } from 'mongoose'
import DaysEnum from '../enums/DaysEnum';
import IAd from '../interfaces/IAd';

const AdSchema = new Schema<IAd>({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  title: {
    type: String,
    lowercase: true,
    required: true,
    maxlength: 50
  },
  description: {
    type: String,
    required: true,
    maxlength: 500
  },
  price: {
    type: Number,
    required: true,
    maxlength: 6,
    min: 0,
    max: 99999
  },
  days: {
    type: Array,
    required: true,
    items: Object.keys(DaysEnum)
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

export default AdSchema;
