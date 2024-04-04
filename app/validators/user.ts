import vine from '@vinejs/vine'

/**
 * Validates the user's register
 */
export const registerUserValidator = vine.compile(
  vine.object({
    username: vine.string().trim().minLength(6),
    password: vine.string().trim().minLength(8),
  })
)

/**
 * Validates the user's login
 */
export const loginUserValidator = vine.compile(
  vine.object({
    username: vine.string().trim().minLength(6),
    password: vine.string().trim().minLength(8),
  })
)
