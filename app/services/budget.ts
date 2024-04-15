import Budget from "#models/budget";

export default class BudgetService {
  async calculateBalance(budget: Budget): number {
    return budget.income - budget.expense;
  }
}
