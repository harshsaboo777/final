import client from "../db.js";

export const createUser = async (req, res) => {
	const { email, password, user_fname, user_lname, dob, phone, salary } =
		req.body;
	let exists;
	try {
		exists = await client.query(
			"Select * from Member where Member.email=$1;",
			[email]
		);
	} catch (err) {
		console.log(err);
	}
	if (exists.rowCount != 0) {
		res.status(500).send(
			"Email is already under use . Try Sign in instead "
		);
	} else {
		let newUser;
		try {
			newUser = await client.query(
				"insert into Member(email,password,user_fname,user_lname,date_of_birth,phone_number,salary) values($1,$2,$3,$4,$5,$6,$7);",
				[email, password, user_fname, user_lname, dob, phone, salary]
			);
			res.status(200).send("User has been created");
		} catch (err) {
			console.log(err);
		}
	}
};

export const logInUser = async (req, res) => {
	const { email, password } = req.body;
	let userExists;
	try {
		userExists = await client.query(
			"select Member.mem_id from Member WHERE Email=$1 and Password=$2;",
			[email, password]
		);
	} catch (err) {
		console.log(err);
	}
	if (userExists.rowCount == 1) {
		console.log(userExists.rows);
		res.status(200).send("You are now logged in ");
	} else {
		res.status(500).send("Wrong Email or Password");
	}
};
