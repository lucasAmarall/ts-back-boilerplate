import { Router } from 'express'
import UserController from '../../controllers/UserController'

const routes = Router()

routes.get('/', UserController.myProfile)
routes.post('/signup', UserController.signUp)
routes.post('/signin', UserController.signIn)

export default routes
