import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import CONFIG from './config';
import routes from './router';
import ErrorMiddleware from './middlewares/ErrorMiddleware';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    App.database();
    this.routes();
    if (process.env.DEBUGGER) console.log('Debugger activated');
  }

  private middlewares(): void {
    this.express.use(bodyParser.json());
    this.express.use(express.json());
    this.express.use(cors());
  }

  private static database(): void {
    try {
      mongoose.set('useCreateIndex', true);
      mongoose.connect(CONFIG.connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (error) {
      if (process.env.DEBUGGER) console.error(error);
    }
  }

  private routes(): void {
    this.express.use(routes);
    this.express.use(routes);
    this.express.use(ErrorMiddleware.handler);
  }
}

export default new App().express;
