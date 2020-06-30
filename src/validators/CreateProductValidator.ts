import Joi from '@hapi/joi';
import DaysEnum from '../enums/DaysEnum'

const schema = Joi.object({
  title: Joi.string()
    .max(50)
    .required(),
  description: Joi.string()
    .max(500)
    .required(),
  price: Joi.number()
    .required(),
  days: Joi.array()
    .items(...Object.values(DaysEnum))
    .required()
});

export default schema;
