import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import CONFIG from './config'
import routes from './router'
import bodyParser from 'body-parser'
import ErrorMiddleware from './middlewares/ErrorMiddleware';
import ErrorHandler from './helpers/ErrorHandler'
import HandleError from './helpers/HandleError'
class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
    if (process.env.DEBUGGER) console.log('Debugger activated')
  }

  private middlewares (): void {
    this.express.use(bodyParser.json())
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    try {
      mongoose.set('useCreateIndex', true)
      mongoose.connect(CONFIG.connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    } catch (error) {
      if (process.env.DEBUGGER) console.error(error)
    }
  }

  private routes (): void {
    this.express.use(routes)
    this.express.use(routes)
    this.express.use(ErrorMiddleware.handler);
  }
}

export default new App().express
