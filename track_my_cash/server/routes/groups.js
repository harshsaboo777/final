import express from "express";
import {
	addExpense,
	getGroups,
	getMembers,
	showExpenses,
	addGroup,
	addMember,
} from "../controllers/Groups.controller.js";

const router = express.Router();

router.post("/addMem", addMember);
router.post("/add", addGroup);
router.post("/", getGroups);
router.get("/members/:id", getMembers);
router.get("/:id", showExpenses);
router.post("/:id", addExpense);

export default router;
