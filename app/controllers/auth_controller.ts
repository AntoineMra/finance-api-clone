import User from '#models/user'
import { registerUserValidator, loginUserValidator } from '#validators/user'
import { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register(ctx: HttpContext) {
    const data = ctx.request.all()
    const payload = await registerUserValidator.validate(data)
    const user = await User.create(payload)
    const token = await User.accessTokens.create(user)

    return ctx.response.json({ token })
  }

  async login(ctx: HttpContext) {
    const data = ctx.request.all()
    const { username, password } = await loginUserValidator.validate(data)
    const user = await User.verifyCredentials(username, password)

    if (!user) {
      return ctx.response.badRequest({ message: 'Invalid credentials' })
    }

    const token = await User.accessTokens.create(user)

    return ctx.response.json({ token })
  }
}
