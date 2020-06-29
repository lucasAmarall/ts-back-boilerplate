import UserRepository from '../repositories/UserRepository'
import ErrorHandler from '../helpers/ErrorHandler';
import sha256 from '../helpers/Sha256';
import { Request, Response, NextFunction } from 'express'
import { IUser } from '../interfaces/IUser'
class UserController {
  public async create (req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const data: IUser = req.body;
      data.password = sha256(data.password);
      await UserRepository.create(data);
      return res.status(201).json();
    } catch (error) {
      next(new ErrorHandler(409, error))
    }
  }
}
export default new UserController()
