import UserRepository from '../repositories/UserRepository'
import ErrorHandler from '../helpers/ErrorHandler';
import { Request, Response, NextFunction } from 'express'
import { IUser } from '../interfaces/IUser'
import JWT from '../helpers/JWT';

class UserController {

  public async create (req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const data: IUser = req.body;
      await UserRepository.create(data);
      return res.status(201).json();
    } catch (error) {
      next(new ErrorHandler(409, error))
    }
  }

  public async read (req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      // todo define type
      const { decondedSession } = req.body;
      const { id } = decondedSession;
      const user = await UserRepository.getById(id);
      return res.status(200).json(user);
    } catch (error) {
      next(error)
    }
  }

  public async authenticate (req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const data: IUser = req.body;
      const user = await UserRepository.authenticate(data);
      if(!user) throw new ErrorHandler(401, '')
      const { _id } = user;
      const id = JWT.encodeSession({id: _id});
      return res.status(200).json({"access-token": id});
    } catch (error) {
      next(error)
    }
  }

  public async delete (req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const data: IUser = req.body;
      await UserRepository.delete(data);
      return res.status(410).json();
    } catch (error) {
      next(new ErrorHandler(409, error))
    }
  }
}
export default new UserController()
