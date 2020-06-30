import AdSchema from '../schemas/AdSchema'
import { Model, model , DocumentQuery} from 'mongoose'
import IAdDocument from '../interfaces/IAdDocument'
import IAd from "../interfaces/IAd";

class UserModel {
  private ad: Model<IAdDocument> = model<IAdDocument>('Ad', AdSchema)
  
  public create (ad: IAd): Promise<IAdDocument> {
    return this.ad.create(ad)
  }
}

export default UserModel
