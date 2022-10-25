import client from "../db.js";

export const getGroups = async (req, res) => {
	let mem_id = req.body;
	const groups = [];
	try {
		groups = await client.query(
			"Select group_id,amount_due,name from belongs_to natural join groups where mem_id=$1",
			[mem_id]
		);
	} catch (error) {
		console.log(error);
	}
	res.status(200).send(groups);
};

export const showExpenses = async (req, res) => {
	let group_id = req.body;
	const expenses = [];
	try {
		expenses = await client.query(
			"Select * from group_expense where group_id=$1",
			[group_id]
		);
	} catch (error) {
		console.log(error);
	}
	res.status(200).send(expenses);
};
