import express from "express";
import {
	getGroups,
	getMembers,
	showExpenses,
} from "../controllers/Groups.controller.js";

const router = express.Router();

router.post("/", getGroups);
router.get("/members/:id", getMembers);
router.get("/:id", showExpenses);

export default router;
