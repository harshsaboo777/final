import express from "express";
// import { createUser, logInUser } from "../controllers/signUp.controller.js";
import { getGroups, showExpenses } from "../controllers/Groups.controller.js";

const router = express.Router();

// router.post("/signUp", createUser);
// router.post("/login", logInUser);

router.get("/", getGroups);
router.get("/:id", showExpenses);

export default router;
