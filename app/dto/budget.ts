import { DateTime } from 'luxon'

export default interface BudgetDto {
  id: number
  date: string
  expense: number
  income: number
  ownerId: number
  createdAt: DateTime
  updatedAt?: DateTime | null
  savingsRate?: number
  balance?: number
}
