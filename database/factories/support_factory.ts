import factory from '@adonisjs/lucid/factories'
import Support from '#models/support'
import { UserFactory } from './user_factory.js'

export const SupportFactory = factory
  .define(Support, async ({ faker }) => {
    return {
      amount: faker.datatype.number({ min: 1000, max: 8000, precision: 0.01 }),
    }
  })
  .relation('owner', () => UserFactory)
  .build()
