import express from "express";
import {
	getMembers,
	showExpenses,
	update_salary,
} from "../controllers/Individuals.controller.js";

const router = express.Router();

router.get("/:id", getMembers);
router.get("/expenses/:id", showExpenses);
router.post("/updatesalary" , update_salary);

export default router;
