import express from "express"
import { info } from "./controller.js"
const router = express.Router()


router.get("/me", info)

export default router;