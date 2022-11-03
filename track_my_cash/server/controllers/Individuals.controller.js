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
			"Select * from individual_expense where mem_id=$1 order by date desc",
			[parseInt(mem_id)]
		);
	} catch (error) {
		console.log(error);
	}
	res.status(200).send(expenses.rows);
};

export const getExpenseTypes = async (req, res) => {
	let types;
	try {
		types = await client.query("Select * from expense_type");
		types = types.rows;
		res.status(200).send(types);
	} catch (e) {
		console.log(e);
	}
};


export const addExpense = async (req, res) => {
	let mem_id= parseInt(req.body.mem_id);
	
	//let date: getCurrentDate(),
	let amount = (req.body.amount);
	let remarks = req.body.remarks;
	let expense_type_id= (req.body.expense_type_id);

	console.log(req.body);
	try {
		await client.query(
			"INSERT INTO Individual_Expense(Mem_id,Amount,Date,Remarks,Expense_type_id) values ($1,$2,NOW(),$3,$4);",
			[mem_id, amount, remarks,expense_type_id]
		);
	} catch (err) {
		console.log(err);
	}
	res.status(200).send("done");
};
