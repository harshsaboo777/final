import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../componentsStyles/modal.css";

import axios from "axios";
import Cookies from "universal-cookie";

function AddIndividualExpense(){
    const cookies = new Cookies();
	const Member_Id = cookies.get("Member").mem_id;

    const handleDropdown = (e) => {
		const { value } = e.target;
		let name = "";
		memberExpenses.paid_by = value;
		membersArr.forEach((member) => {
			if (member.mem_id == value) {
				name = member.fname;
			}
		});
		memberExpenses.fname = name;
	};
    const getCurrentDate = (separator = "/") => {
		let newDate = new Date();
		let date = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();

		return `${year}${separator}${
			month < 10 ? `0${month}` : `${month}`
		}${separator}${date}`;
	};

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
					<h1>Add New Expense</h1>
				</div>
				<div className="body">
					<p>
						<div className="card">
							<form action="">
								<select
									class="custom-select mr-sm-2 form-select form-select-lg mb-3"
									id="inlineFormCustomSelect"
									required
									onChange={handleDropdown}
								>
									<option selected>Category </option>
									{categoryArr.map((category) => (
										<option
											value={category.expense_type_id}
											name={category.type}
										>
											{category.type}
										</option>
									))}
								</select>
								
								<input
									type="text"
									class="form-control"
									name="remarks"
									value={memberExpenses.remarks}
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
export default Add_Individual_Expense;