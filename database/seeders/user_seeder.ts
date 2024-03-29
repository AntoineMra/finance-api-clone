import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        username: 'mockexample',
        password: 'testtest',
      },
      {
        username: 'johndoe',
        password: 'mockmock',
      },
      {
        username: 'capybara',
        password: 'capybara',
      },
    ])
  }
}
