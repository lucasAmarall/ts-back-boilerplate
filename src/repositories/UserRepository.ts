import UserModel from '../models/UserModel'
import { IUser } from '../interfaces/IUser'

class UserRespository {
  private user: UserModel = new UserModel()

  public async signUp (data: IUser): Promise<IUser> {
    return this.user.signUp(data)
  }

  public async signIn (mail: string, password: string): Promise<IUser> {
    return this.user.signIn(mail, password)
  }

  public async myProfile (id: string): Promise<IUser> {
    return this.user.getById(id)
  }
}

export default new UserRespository()
