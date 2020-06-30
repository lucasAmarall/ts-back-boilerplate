import { Router, Request } from 'express'
import UserRoutes from './routes/UserRoute'
import AdRoutes from './routes/AdRoute'
import DefaultRoutes from './routes/DefaultRoute';

const routes = Router()
routes.use('/user', UserRoutes)
routes.use('/product', AdRoutes)
routes.use('/', DefaultRoutes)

export default routes
