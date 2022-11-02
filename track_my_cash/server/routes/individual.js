import express from "express";
import {
	getMembers,
	showExpenses,
	getExpenseTypes,
} from "../controllers/Individuals.controller.js";

const router = express.Router();

router.get("/types", getExpenseTypes);
router.get("/id/:id", getMembers);
router.get("/expenses/:id", showExpenses);

export default router;
