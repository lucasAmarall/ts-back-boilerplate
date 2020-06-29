import crypto from 'crypto';
import config from '../config/index'
const { SALT_KEY } = config;

const sha256 = (str: string) => crypto.createHash('sha256').update(str + SALT_KEY, 'utf8').digest('hex')

export default sha256;
