import Budget from '#models/budget'

export default class BudgetService {
  calculateBalance(budget: Budget): number {
    const { income, expense } = budget
    return income - expense
  }

  calculateSavingsRate(budget: Budget): number {
    const { income, expense } = budget
    return (income - expense) / income
  }
}
