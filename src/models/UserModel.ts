import UserSchema from '../schemas/UserSchema'
import { Model, model } from 'mongoose'
import IUserDocument from '../interfaces/IUserDocument'
import { IUser } from '../interfaces/IUser'
class UserModel {
  private user: Model<IUserDocument> = model<IUserDocument>('User', UserSchema)

  public create (user: IUser): Promise<IUserDocument> {
    return this.user.create(user)
  }
}

export default UserModel
