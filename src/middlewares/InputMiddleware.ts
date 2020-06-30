
import { NextFunction, Request, Response } from 'express'

class Validator {
  static validate(validator: any) {
    return async function (req: Request, res: Response, next: NextFunction) {
      try {
        const value = await validator.validateAsync(req.body)
        req.body = value;
        next();
      } catch (error) {
        delete error._original
        res.status(400).json({ error })
      }
    }
  }
}

export default Validator;