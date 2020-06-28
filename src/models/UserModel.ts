import UserSchema from '../schemas/UserSchema'
import { Document, Model, model } from 'mongoose'
import { IUser } from '../interfaces/IUser'

export interface User extends Document, IUser {}

class UserModel {
  private user: Model<User> = model<User>('User', UserSchema)

  public signUp (user: IUser): Promise<IUser> {
    return this.user.create(user)
  }

  public async signIn (mail: string, password: string): Promise<IUser> {
    const user: User = await this.user.findOne({
      mail, password
    }, '_id')

    return user
  }

  public async getById (id: string): Promise<IUser> {
    const user = await this.user.findById(id, 'firstName lastName photoId productList')
    return user
  }
}

export default UserModel
