import { Document } from 'mongoose'
import IAd from '../interfaces/IAd'

export default interface IAdDocument extends Document, IAd {}
