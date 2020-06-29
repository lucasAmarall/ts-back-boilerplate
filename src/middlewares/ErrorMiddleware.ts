import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../helpers/ErrorHandler';
import HandleError from '../helpers/HandleError';

class ErrorMiddleware {
  handler(err: ErrorHandler, req: Request, res: Response, next: NextFunction){
    new HandleError(err, res);
  }
}
 
export default new ErrorMiddleware();