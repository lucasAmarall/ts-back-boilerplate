
import * as jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import config from '../config'

const SIGNUPOPTIONS = {
  expiresIn: '1d'
}

class JWTUtils {
  public _token: string;

  public decodeToken (token: string): object {
    const decodedToken = jwt.verify(token, config.SALT_KEY)
    if (typeof decodedToken === 'string') {
      return {
        error: decodedToken
      }
    }
    return decodedToken
  }

  public generateToken (data: object): string | void {
    return jwt.sign(data, config.SALT_KEY, SIGNUPOPTIONS)
  }

  public getToken (req:Request): string {
    return req.headers['x-access-token'].toString()
  }

  public authorize (req:Request, res: Response, next: NextFunction): void {
    const token = req.headers['x-access-token'][0]
    let { _token } = this
    if (!_token) {
      res.status(401).send()
    }
    jwt.verify(token, config.SALT_KEY, (error: Error): void => {
      if (error) res.status(401).send()
      this._token = token
      next()
    })
  }
}

export default new JWTUtils()
