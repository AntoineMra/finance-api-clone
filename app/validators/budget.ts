import vine from '@vinejs/vine'

/**
 * Validates the budget's creation
 */
export const createBudgetValidator = vine.compile(
  vine.object({
    date: vine.date({ formats: 'DD/MM/YYYY' }),
    expense: vine.number().min(100).max(2000),
    income: vine.number().min(100).max(2000),
  })
)
