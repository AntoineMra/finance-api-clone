import User from '#models/user'
import { registerUserValidator } from '#validators/user'
import { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register(ctx: HttpContext) {
    const data = ctx.request.all()
    const payload = await registerUserValidator.validate(data)
    const user = await User.create(payload)
    const token = await User.accessTokens.create(user)

    return ctx.response.json({ token })
  }
}
