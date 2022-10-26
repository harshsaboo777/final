import client from "../db.js";

export const getGroups = async (req, res) => {
	let mem_id = req.body.mem_id;
	let groups = [];
	try {
		groups = await client.query(
			"Select member.fname as owner_name,group_id,created_on,name from belongs_to natural join groups join member on groups.owner_id=member.mem_id where belongs_to.mem_id=$1 ",
			[parseInt(mem_id)]
		);
	} catch (error) {
		console.log(error);
	}
	res.status(200).send(groups);
};

export const showExpenses = async (req, res) => {
	let group_id = req.params;
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

export const addGroup = async (req, res) => {
	let mem_id = req.body.mem_id;
	let group_id;
	try {
		await client.query(
			"INSERT INTO Groups(Owner_id,Name,Created_on) VALUES ($1,$2,NOW())",
			[parseInt(mem_id), group_name]
		);
		group_id = await client.query(
			"Select group_id from groups where owner_id=$1 and name=$2",
			[parseInt(mem_id), group_name]
		);
		await client.query(
			"INSERT INTO belongs_to(mem_id,group_id,amount_due) VALUES ($1,$2,0)",
			[parseInt(mem_id), parseInt(group_id)]
		);
	} catch (err) {
		console.log(err);
	}
};
