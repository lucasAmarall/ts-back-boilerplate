import AdRepository from '../repositories/AdRepository'
import ErrorHandler from '../helpers/ErrorHandler';
import { Request, Response, NextFunction } from 'express'
import IAd from '../interfaces/IAd'
import IDecodedResult from "../interfaces/IDecodedData";
import UserRespository from '../repositories/UserRepository';

class AdController {
  public async read (req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const ad: IDecodedResult<IAd> = req.body;
      const owner = ad.decodedSession.id;
      delete ad.decodedSession
      const data = await AdRepository.create({...ad,owner});
      const userById = await UserRespository.getById(owner);
      userById.ads.push(data._id);
      userById.save()
      return res.status(201).json();
    } catch (error) {
      next(new ErrorHandler(409, error))
    }
  }

}
export default new AdController()
