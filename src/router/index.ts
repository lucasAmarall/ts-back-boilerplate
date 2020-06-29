import { Router, Request } from 'express'
import UserRoutes from './routes/UserRoute'
import DefaultRoutes from './routes/DefaultRoute';

const routes = Router()
routes.use('/user', UserRoutes)
routes.use('/', DefaultRoutes)

export default routes
