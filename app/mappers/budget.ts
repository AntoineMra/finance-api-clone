import Budget from '#models/budget'
import BudgetDto from '#dto/budget'
import BudgetService from '#services/budget'

export default class BudgetMappers {
  async toDto(budget: Budget): BudgetDto {
    const savingRate = BudgetService.calculateSavingsRate(budget)
    const balance = BudgetService.calculateBalance(budget)

    return {
      id: budget.id,
      date: budget.date,
      expense: budget.expense,
      income: budget.income,
      ownerId: budget.ownerId,
      createdAt: budget.createdAt,
      updatedAt: budget.updatedAt,
      savingsRate: savingRate,
      balance: balance,
    }
  }
}
