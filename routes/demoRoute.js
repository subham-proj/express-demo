import express from "express";
import { testing } from "../controllers/testController.js";
const router = express.Router();

router.route("/demo").get(testing);

export default router;