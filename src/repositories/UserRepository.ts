import UserModel from '../models/UserModel'
import { IUser } from '../interfaces/IUser'

class UserRespository {
  private user: UserModel = new UserModel()

  public async create (data: IUser): Promise<IUser> {
    return this.user.create(data)
  }
}

export default new UserRespository()
