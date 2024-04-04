/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.post('/register', '#controllers/auth_controller.register')

router.post('/login', '#controllers/auth_controller.login')

router.post('/budgets', '#controllers/budgets_controller.store').use(middleware.auth())
