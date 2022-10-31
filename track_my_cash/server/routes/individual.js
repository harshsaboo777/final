import express from "express";
import { getMembers } from "../controllers/Individuals.controller.js";

const router = express.Router();

router.get("/:id", getMembers);

export default router;
