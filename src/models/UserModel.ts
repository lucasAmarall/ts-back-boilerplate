import UserSchema from '../schemas/UserSchema'
import { Model, model , DocumentQuery} from 'mongoose'
import IUserDocument from '../interfaces/IUserDocument'
import IUser from '../interfaces/IUser'
class UserModel {
  private user: Model<IUserDocument> = model<IUserDocument>('User', UserSchema)
  
  public create (user: IUser): Promise<IUserDocument> {
    return this.user.create(user)
  }

  public getById (id: string): DocumentQuery<IUserDocument, IUserDocument, {}> {
    return this.user.findById(id, ['-password']).populate('ads', ['title', 'description','days','price', '_id'])
  }

  public read ({password, email}: IUser) : DocumentQuery<IUserDocument, IUserDocument, {}> {
    return this.user.findOne({password, email}, ['-password'])
  }

  public delete ({email, password}: IUser): DocumentQuery<IUserDocument, IUserDocument, {}> {
    return this.user.findOneAndDelete({email,password})
  }
}

export default UserModel
