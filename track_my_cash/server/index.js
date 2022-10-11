import express from "express";
import cors from "cors";
import pool from "./db.cjs";

import signUpRoutes from "./routes/signUp.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
	cors({
		origin: ["http://localhost:3000", "http://localhost:5000"],
		methods: ["POST", "PUT", "GET", "DELETE"],
		credentials: [true],
	})
);

app.use("/auth", signUpRoutes);

app.listen(5000, () => {
	console.log("server has started on port 5000");
});
