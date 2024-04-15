import { test } from '@japa/runner'
import { BudgetFactory } from '#database/factories/BudgetFactory'
import { BudgetService } from '#services/BudgetService'

test.group('Calculate budget fields', () => {
  test('Calculate balance', async ({ assert }) => {
    // Given a budget with income of 1000 and expense of 500
    await BudgetFactory.merge({ income: 1000, expense: 500 }).create()
    // When I calculate the balance

    // Then the balance should be 500
  })
})
