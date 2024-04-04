import Budget from '#models/budget'
import { createBudgetValidator } from '#validators/budget'
import type { HttpContext } from '@adonisjs/core/http'

export default class BudgetsController {
  async index(ctx: HttpContext) {
    const budgets = await Budget.all()
    return ctx.response.json(budgets)
  }

  async store(ctx: HttpContext) {
    const data = ctx.request.all()
    const payload = await createBudgetValidator.validate(data)
    const owner = await ctx.auth.user
    if (!owner) {
      return ctx.response.unauthorized()
    }
    const budget = await owner.related('budgets').create(payload)

    return ctx.response.json(budget)
  }
}
