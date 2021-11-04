import { Router } from 'express'
import * as tacosCtrl from "../controllers/tacos.js"

const router = Router()

// localhost
router.get('/', tacosCtrl.index)





export {
  router
}