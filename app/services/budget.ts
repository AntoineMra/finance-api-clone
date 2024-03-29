import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class BudgetService {
  constructor(protected ctx: HttpContext) {}

  async all() {
    console.log(this.ctx.auth.user)
    // return users from db
  }
}
