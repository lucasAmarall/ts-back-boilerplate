import { Router } from 'express'
import AdController from '../../controllers/AdController'
import InputMiddleware from '../../middlewares/InputMiddleware';
import CreateProductValidator from '../../validators/CreateProductValidator';
import AuthValidation from '../../middlewares/AuthMiddleware';

const routes = Router()

routes.get('/',
  InputMiddleware.validate(CreateProductValidator),
  AuthValidation.authenticate,
  AdController.read,
);

export default routes
