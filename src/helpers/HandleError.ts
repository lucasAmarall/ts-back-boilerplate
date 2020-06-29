import { Response, Errback } from 'express';
import ErroHandler from './ErrorHandler';

class HandleError {
  constructor(err: ErroHandler, res: Response) {
    const { statusCode, message } = err;
    res.status(statusCode).json({
      status: "error",
      statusCode,
      message
    });
  }
};

export default HandleError