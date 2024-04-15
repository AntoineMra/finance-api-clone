import { test } from '@japa/runner'

test.group('Should manage budgets', () => {
  test('Should be able to create a budget', async ({ assert, client }) => {
    // Get a test token from the auth controller
    const authResponse = await client.post('/login').json({
      username: 'mockmock',
      password: 'password',
    })
    const token = authResponse.body().token.token
    console.log(token)

    const response = await client
      .post('/budgets')
      .headers({
        Authorization: `Bearer ${token}`,
      })
      .json({
        expense: 1000,
        income: 2000,
        date: '02/02/2022',
      })

    response.assertStatus(201)
    assert.containsSubset(response.body, {
      expense: 1000,
      income: 2000,
      balance: 200,
      date: '02/2022',
      savingsRate: 0.5,
    })
  })
})
