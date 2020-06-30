import Joi from '@hapi/joi';

const schema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com'] } })
    .required(),
  password: Joi.string()
    .regex(/^[\x20-\x7E]+$/)
    .min(8)
    .max(72)
    .required(),
});

export default schema;
