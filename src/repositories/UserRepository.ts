import UserModel from '../models/UserModel'
import IUser from '../interfaces/IUser'

class UserRespository {
  private user: UserModel = new UserModel()

  public async create (data: IUser) {
    return this.user.create(data)
  }

  public async getById (id: string) {
    return this.user.getById(id)
  }
  
  public async authenticate (data: IUser) {
    return this.user.read(data)
  }

  public async delete (data: IUser) {
    return this.user.delete(data)
  }
}

export default new UserRespository()
