import express from "express";
import {
	getMembers,
	showExpenses,
} from "../controllers/Individuals.controller.js";

const router = express.Router();

router.get("/:id", getMembers);
router.get("/expenses/:id", showExpenses);

export default router;
