import React, { useState } from "react";
import "../componentsStyles/modal.css";

let members = [];

function Add_Group_expense({ setOpenModal, state, setState }) {
	const getCurrentDate = (separator = "/") => {
		let newDate = new Date();
		let date = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();

		return `${year}${separator}${
			month < 10 ? `0${month}` : `${month}`
		}${separator}${date}`;
	};
	const [memberExpenses, setmemberExpenses] = useState({
		memberName: "",
		expenseType: "",
		amount: 0,
		time: getCurrentDate(),
	});
	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setmemberExpenses({ ...memberExpenses, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setmemberExpenses({ ...memberExpenses, time: getCurrentDate() });
		// members.push(memberExpenses);
		// console.log(memberExpenses);
		let newState = [...state, memberExpenses];
		// console.log(state);
		setState(newState);
		console.log(state);
	};
	// setmemberExpenses({ ...memberExpenses, time: getCurrentDate() });
	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<div className="titleCloseBtn">
					<button
						onClick={() => {
							setOpenModal(false);
						}}
					>
						X
					</button>
				</div>
				<div className="title">
					<h1>Add New Group Expense</h1>
				</div>
				<div className="body">
					<p>
						<div className="card">
							<form action="">
								<input
									type="text"
									class="form-control"
									name="memberName"
									value={memberExpenses.memberName}
									onChange={handleInput}
									placeholder="Member Name"
								/>
								<input
									type="text"
									class="form-control"
									name="expenseType"
									value={memberExpenses.expenseType}
									onChange={handleInput}
									placeholder="Expense Type"
								/>
								<input
									type="text"
									class="form-control"
									name="amount"
									value={memberExpenses.amount}
									onChange={handleInput}
									placeholder="Amount"
								/>
							</form>
						</div>
					</p>
				</div>
				<div className="footer">
					<button
						onClick={() => {
							setOpenModal(false);
						}}
						id="cancelBtn"
					>
						Cancel
					</button>
					<button type="submit" onClick={handleSubmit}>
						Add
					</button>
				</div>
			</div>
		</div>
	);
}

export default Add_Group_expense;
export { members };
