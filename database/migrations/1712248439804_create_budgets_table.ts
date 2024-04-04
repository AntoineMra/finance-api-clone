import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'budgets'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.date('date').notNullable()
      table.float('expense').notNullable()
      table.float('income').notNullable()
      table.integer('owner_id').unsigned().references('id').inTable('users')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
