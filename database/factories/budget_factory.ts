import factory from '@adonisjs/lucid/factories'
import Budget from '#models/budget'
import { UserFactory } from './user_factory.js'

export const BudgetFactory = factory
  .define(Budget, async ({ faker }) => {
    return {
      date: faker.date.recent(),
      expense: faker.datatype.number({ min: 100, max: 2000, precision: 0.01 }),
      income: faker.datatype.number({ min: 100, max: 2000, precision: 0.01 }),
    }
  })
  .relation('owner', () => UserFactory)
  .build()
