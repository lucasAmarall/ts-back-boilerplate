import Joi from '@hapi/joi';
import GenderEnum from '../enums/GenderEnum'

const schema = Joi.object({
  name: Joi.string()
          .max(40)
          .regex(/^[a-zA-Z\.\'\-]{2,50}(?: [a-zA-Z\.\'\-]{2,50})+$/)
          .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com'] } })
    .required(),
  password: Joi.string()
    .regex(/^[\x20-\x7E]+$/)
    .min(8)
    .max(72)
    .required(),
  gender: Joi.string().valid(...Object.keys(GenderEnum))
});

export default schema;
