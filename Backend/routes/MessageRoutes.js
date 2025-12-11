import express from "express"
import { sendMessages } from "../controllers/MessageController.js"
import secureRoute from "../middleware/secureRoute.js"

const router = express.Router()

router.post("/send/:id", secureRoute, sendMessages)

export default router
