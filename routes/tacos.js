import { Router } from 'express'
import * as tacosCtrl from "../controllers/tacos.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

// localhost:300/tacos - GET
router.get('/', tacosCtrl.index)

//localhost:300/tacos/:id - GET
router.get('/:id', tacosCtrl.show)

// localhost:300/tacos - POST
router.post('/', isLoggedIn, tacosCtrl.create)

// localhost:300/tacos/:id/flip-tasty - PATCH
router.patch('/:id/flip-tasty', isLoggedIn, tacosCtrl.flipTasty)

export {
  router
}