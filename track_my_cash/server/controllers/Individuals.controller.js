import client from "../db.js";

export const getMembers = async (req, res) => {
	let mem_id = req.params.id;
	let member;
	try {
		member = await client.query(
			"Select fname,lname,salary from member where mem_id=$1 ",
			[mem_id]
		);
	} catch (error) {
		console.log(error);
	}
	res.status(200).send(member.rows[0]);
};
export const getContact = async (req, res) => {
	console.log(req.body);
	let mem_id = req.body.mem_id;
	let contact;
	try {
		contact = await client.query(
			"Select phone_num from member where mem_id=$1 ",
			[parseInt(mem_id)]
		);
	} catch (error) {
		console.log(error);
	}
	// console.log(contact.rows[0])
	res.status(200).send(contact.rows[0]);
};

export const showExpenses = async (req, res) => {
	let mem_id = req.params.id;
	let expenses = [];
	try {
		expenses = await client.query(
			"select remarks,ET.type,amount,date from Individual_Expense as IE inner join expense_type as ET on IE.Expense_type_id=ET.Expense_type_id where IE.Mem_id=$1;",
			[mem_id]
		);
	} catch (err) {
		console.log(err);
	}
	res.status(200).send(expenses.rows);
};

export const addExpenses = async (req, res) => {
	const { id, description, sector, amount, date } = req.body;
	try {
		await client.query("insert into Individual_Expense values()", [mem_id]);
	} catch (err) {
		console.log(err);
	}
	res.status(200).send(expenses.rows);
};

export const update_salary = async (req, res) => {
	try {
		const { user_id, salary } = req.body;

		console.log(salary);
		await client.query(`update member SET salary = $1 WHERE mem_id = $2`, [
			salary,
			user_id,
		]);
		console.log("SUCESS UPDATING SALARY");
		res.send("Sucess updating salary");
	} catch (err) {
		res.send(err.message);
	}
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
	let mem_id = parseInt(req.body.mem_id);

	//let date: getCurrentDate(),
	let amount = req.body.amount;
	let remarks = req.body.remarks;
	let expense_type_id = req.body.expense_type_id;

	console.log(req.body);
	try {
		await client.query(
			"INSERT INTO Individual_Expense(Mem_id,Amount,Date,Remarks,Expense_type_id) values ($1,$2,NOW(),$3,$4);",
			[mem_id, amount, remarks, expense_type_id]
		);
	} catch (err) {
		console.log(err);
	}
	res.status(200).send("done");
};

export const allgroupexpenses = async(req,res)=>{

	let id = req.params.id;
	try{
		const result=await client.query(
			"select groups.name,Belongs_To.amount_due from Belongs_To inner join groups on groups.group_id=Belongs_To.group_id where Belongs_To.Mem_id=$1 and Belongs_To.amount_due>0 and Belongs_To.amount_due!='NaN';",[id]
		);
		res.send(result.rows);
	}catch(err){
		console.log(err);
	}
}