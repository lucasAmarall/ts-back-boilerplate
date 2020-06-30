import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../helpers/ErrorHandler';
import sha256 from '../helpers/Sha256';

class EncriptMiddleware {
  static async password(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.body.password) {
        throw new ErrorHandler(400, 'password is required')
      }
      req.body.password = sha256(req.body.password);
      next()
    } catch (e) {
      next(e)
    }
  }
}

export default EncriptMiddleware;