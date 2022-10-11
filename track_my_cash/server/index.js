import express from "express";
import cors from "cors";
import pool from "./db.cjs";

import signinRoutes from "./routes/signin.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/signin", signinRoutes);

app.listen(5000, () => {
	console.log("server has started on port 5000");
});
