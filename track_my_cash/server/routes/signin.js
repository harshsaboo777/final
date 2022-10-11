import express from "express";
import { getEmailPasswd } from "../controllers/signin.controller.js";

const router = express.Router();

router.get("/", getEmailPasswd);

export default router;
