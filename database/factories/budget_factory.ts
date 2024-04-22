import factory from '@adonisjs/lucid/factories'
import Budget from '#models/budget'
import { UserFactory } from './user_factory.js'

export const BudgetFactory = factory
  .define(Budget, async ({ faker }) => {
    return {
      date: faker.date.recent(),
      expense: faker.number.int({ min: 1000, max: 5000 }),
      income: faker.number.int({ min: 1000, max: 5000 }),
    }
  })
  .relation('owner', () => UserFactory)
  .build()
