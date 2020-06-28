import { Router } from 'express'
import UserRoutes from './routes/UserRoute'

const routes = Router()
routes.use('/user', UserRoutes)

export default routes
