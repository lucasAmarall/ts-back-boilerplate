
import { Router, Request, Response } from 'express'

const routes = Router();

routes.get('/', (_: Request, res: Response): Response => {
    return res.status(200).json({
      status: 200
    });
});

export default routes;
