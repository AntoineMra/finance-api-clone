import testUtils from '@adonisjs/core/services/test_utils'
import { test } from '@japa/runner'

test.group('should manage authentication', (group) => {
  group.each.setup(() => testUtils.db().truncate())
  test('Should be able to register as a user', async ({ assert, client }) => {
    const response = await client.post('/register').json({
      username: 'mockmock',
      password: 'password',
    })

    response.assertStatus(200)
    assert.exists(response.body().token)
  })
})
