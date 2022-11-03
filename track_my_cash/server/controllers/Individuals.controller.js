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

	const {id,description,sector,amount,date} = req.body;
	try {
		    await client.query(
			"insert into Individual_Expense values()",
			[mem_id]
		);
	} catch (err) {
		console.log(err);
	}
	res.status(200).send(expenses.rows);
};


export const update_salary = async (req,res) =>{
	try{
		const {user_id , salary} = req.body;

		console.log(salary);
		await client.query
		(`update member SET salary = $1 WHERE mem_id = $2`,[salary,user_id]);
		console.log("SUCESS UPDATING SALARY");
		res.send("Sucess updating salary");
	}catch(err){
		res.send(err.message);
	}
}




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

