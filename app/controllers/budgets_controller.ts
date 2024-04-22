import Budget from '#models/budget'
import { createBudgetValidator } from '#validators/budget'
import type { HttpContext } from '@adonisjs/core/http'
import BudgetMapper from '../mappers/budget.js'

export default class BudgetsController {
  private budgetMapper: BudgetMapper
  constructor() {
    this.budgetMapper = new BudgetMapper()
  }
  async index(ctx: HttpContext) {
    const budgets = await Budget.all()
    const budgetDtos = budgets.map(this.budgetMapper.toDto)

    return ctx.response.json(budgetDtos)
  }

  async store(ctx: HttpContext) {
    const data = ctx.request.all()
    const payload = await createBudgetValidator.validate(data)
    const owner = ctx.auth.user
    if (!owner) {
      return ctx.response.unauthorized()
    }
    const budget = await owner.related('budgets').create(payload)
    const budgetDto = this.budgetMapper.toDto(budget)

    return ctx.response.status(201).json(budgetDto)
  }
}
