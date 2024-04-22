import Budget from '#models/budget'
import BudgetService from '#services/budget'
import BudgetDto from '../dto/budget.js'

export default class BudgetMappers {
  toDto(budget: Budget): BudgetDto {
    const budgetService = new BudgetService()
    const savingRate = budgetService.calculateSavingsRate(budget)
    const balance = budgetService.calculateBalance(budget)

    return {
      id: budget.id,
      date: budget.date.toLocaleDateString(),
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
