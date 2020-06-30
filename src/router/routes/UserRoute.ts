import { Router } from 'express'
import UserController from '../../controllers/UserController'
import InputMiddleware from '../../middlewares/InputMiddleware';
import CreateUserValidator from '../../validators/CreateUserValidator';
import UserAuthValidation from '../../validators/UserAuthValidation';
import EncriptMiddleware from '../../middlewares/EncriptMiddleware';
import AuthValidation from '../../middlewares/AuthMiddleware';

const routes = Router()

routes.get('/',
  AuthValidation.authenticate,
  UserController.read,
);

routes.post('/',
  InputMiddleware.validate(CreateUserValidator),
  EncriptMiddleware.password,
  UserController.create,
);

routes.post('/login',
  InputMiddleware.validate(UserAuthValidation),
  EncriptMiddleware.password,
  UserController.authenticate,
);

routes.delete('/',
  InputMiddleware.validate(UserAuthValidation),
  EncriptMiddleware.password,
  UserController.delete
)
export default routes
