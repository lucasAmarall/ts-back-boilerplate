import { Router } from 'express'
import UserController from '../../controllers/UserController'
import InputMiddleware from '../../middlewares/InputMiddleware';
import CreateUserValidator from '../../validators/CreateUserValidator';

const routes = Router()
routes.post('/',
  InputMiddleware.validate(CreateUserValidator),
  UserController.create
);

export default routes
