import pool from "../db.cjs";

export const getEmailPasswd = async (req, res) => {
	try {
		const data = await pool.query("Select * from user_auth;");
		console.log(data.rows);
	} catch (err) {
		console.log(err);
	}
};
