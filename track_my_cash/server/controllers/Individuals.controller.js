import client from "../db.js";

export const getMembers = async (req, res) => {
	let mem_id = req.params.id;
	let member;
	try {
		member = await client.query(
			"Select fname,lname,salary from member where mem_id=$1 ",
			[parseInt(mem_id)]
		);
	} catch (error) {
		console.log(error);
	}
	res.status(200).send(member.rows[0]);
};

export const showExpenses = async (req, res) => {
	let mem_id = req.params.id;
	let expenses = [];
	try {
		expenses = await client.query(
			"Select   from group_expense join member on paid_by_mem_id = mem_id where group_id=$1 order by date desc",
			[group_id.id]
		);
	} catch (error) {
		console.log(error);
	}
	res.status(200).send(expenses.rows);
};
