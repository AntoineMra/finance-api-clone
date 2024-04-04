import { test } from '@japa/runner'

test.group('should manage authentication', () => {
  test('Should be able to register as a user', async ({ assert, client }) => {
    const response = await client.post('/register').json({
      username: 'mockmock',
      password: 'password',
    })

    response.assertStatus(200)
    assert.exists(response.body().token)
  })

  test('Should be able to login as a user', async ({ assert, client }) => {
    const response = await client.post('/login').json({
      username: 'capybara',
      password: 'capybara',
    })

    response.assertStatus(200)
    assert.exists(response.body().token)
  })

  test('Should not be able to sign in with invalid credentials', async ({ client }) => {
    const response = await client.post('/login').json({
      username: 'capybara',
      password: 'invalid-password',
    })

    response.assertStatus(400)
    response.assertBodyContains({
      errors: [
        {
          message: 'Invalid user credentials',
        },
      ],
    })
  })
})
