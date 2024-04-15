export default interface BudgetDto {
  id: number
  date: Date
  expense: number
  income: number
  ownerId: number
  createdAt: Date
  updatedAt?: Date
  savingsRate?: number
  balance?: number
}
