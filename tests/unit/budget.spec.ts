import { test } from '@japa/runner'
import { BudgetFactory } from '#database/factories/budget_factory'
import BudgetService from '#services/budget'

test.group('Calculate budget fields', () => {
  test('Calculate balance', async ({ assert }) => {
    // Given a budget with income of 1000 and expense of 500
    const budget = await BudgetFactory.merge({ income: 1000, expense: 500 }).create()

    // When I calculate the balance
    const budgetService = new BudgetService()
    const balance = budgetService.calculateBalance(budget)

    // Then the balance should be 500
    assert.equal(balance, 500)
  })

  test('Calculate negative balance', async ({ assert }) => {
    // Given a budget with income of 500 and expense of 1000
    const budget = await BudgetFactory.merge({ income: 500, expense: 1000 }).create()

    // When I calculate the balance
    const budgetService = new BudgetService()
    const balance = budgetService.calculateBalance(budget)

    // Then the balance should be -500
    assert.equal(balance, -500)
  })

  test('Calculate savings rate', async ({ assert }) => {
    // Given a budget with income of 1000 and expense of 500
    const budget = await BudgetFactory.merge({ income: 1000, expense: 500 }).create()

    // When I calculate the savings rate
    const budgetService = new BudgetService()
    const savingsRate = budgetService.calculateSavingsRate(budget)

    // Then the savings rate should be 0.5
    assert.equal(savingsRate, 0.5)
  })

  test('Calculate negative savings rate', async ({ assert }) => {
    // Given a budget with income of 500 and expense of 1000
    const budget = await BudgetFactory.merge({ income: 500, expense: 1000 }).create()

    // When I calculate the savings rate
    const budgetService = new BudgetService()
    const savingsRate = budgetService.calculateSavingsRate(budget)

    // Then the savings rate should be -1
    assert.equal(savingsRate, -1)
  })
})
