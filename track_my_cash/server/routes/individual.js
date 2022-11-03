import express from "express";
import {
	getMembers,
	showExpenses,

	update_salary,

	getExpenseTypes,

} from "../controllers/Individuals.controller.js";

const router = express.Router();

router.get("/types", getExpenseTypes);
router.get("/id/:id", getMembers);
router.get("/expenses/:id", showExpenses);
router.post("/updatesalary" , update_salary);

export default router;
