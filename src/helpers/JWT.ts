
import * as jwt from 'jsonwebtoken'
import config from '../config'
import IDecodeResult from '../interfaces/IDecodeResult';
import IEncodeSession from '../interfaces/IEncodeSession';

class JWTUtils {
  static encodeSession({id}: IEncodeSession): string {
    return jwt.sign({id}, config.SALT_KEY, config.JWT_OPTIONS);
  }

  static async decodeSession(token: string): IDecodeResult {
    const data: any = await jwt.verify(token, config.SALT_KEY)
    return {
      id: data.id,
      iat: data.iat,
      exp: data.expt
    }
  }
}

export default JWTUtils;
