import { Request, Response } from 'express'
import UserRepository from '../repositories/UserRepository'
import config from '../config/index'
import crypto from 'crypto'
import { IUser } from '../interfaces/IUser'
import JWTUtil from '../utils/JWT'

class UserController {
  public async signUp (req: Request, res: Response): Promise<Response> {
    try {
      const data: IUser = req.body
      const hash = crypto.createHmac('sha256', config.SALT_KEY).update(data.password).digest('hex')
      await UserRepository.signUp({ ...data, password: hash })
      return res.status(200).json({
        created: true
      })
    } catch (e) {
      console.log(e)
      return res.status(500).json({ error: e })
    }
  }

  public async signIn (req: Request, res: Response): Promise<Response> {
    try {
      const { mail, password } = req.body
      const hash = crypto.createHmac('sha256', config.SALT_KEY).update(password).digest('hex')
      const user = await UserRepository.signIn(mail, hash)
      if (!user) {
        throw new Error('User not found')
      }
      const accessToken = JWTUtil.generateToken({ ...user.__doc })
      return res.status(200).json({ accessToken })
    } catch (e) {
      console.log(e)
      return res.status(500).json({ error: e })
    }
  }

  public async myProfile (req: Request, res:Response) : Promise<Response> {
    try {
      const token = JWTUtil.getToken(req)
      const { _id } = JWTUtil.decodeToken(token)
      console.log(token, _id)
      console.log(JWTUtil.decodeToken(token))
      const user = await UserRepository.myProfile(_id)
      console.log(user)
      res.status(200).json({ ...user })
    } catch (e) {
      console.log(e)
      return res.status(500).json({ error: e })
    }
  }
}
export default new UserController()
