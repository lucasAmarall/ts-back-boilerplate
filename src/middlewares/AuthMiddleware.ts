import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../helpers/ErrorHandler';
import JWT from '../helpers/JWT';

class AuthMiddleware {
  static async authenticate(req: Request, res: Response, next: NextFunction){
    try {
      const token = req.headers['access-token'].toString();
      if(!token) throw new ErrorHandler(401, 'unauthorized')
      const decodedSession = JWT.decodeSession(token)
      req.body.decodedSession = decodedSession;
      next()
    } catch(e){
      next(new ErrorHandler(401,e))
    }
  }
}
 
export default AuthMiddleware;