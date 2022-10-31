import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import FloatingSidebar from "./Floating_Sidebar";
import "../componentsStyles/group_dashboard.css";
import ExpenseCard from "./Expense_Card";
import members from "./tempMembers";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

// import members from "./Add_Group_expense";

const cookies = new Cookies();
const Expenses = [];
const IndividualDashBoard = () => {
	const Mem_Id = cookies.get("Member").mem_id;
	const [member, setMember] = useState({});
	const [membersExpenses, setmembersExpenses] = useState(Expenses);
	const onChangeState = (newState) => {
		setmembersExpenses(newState);
		// console.log(membersArr);
	};
	const fetchMember = async (e) => {
		await axios
			.get("http://localhost:5000/member/" + Mem_Id)
			.then((res) => {
				setMember(res.data);
				console.log(res.data);
			});
	};
	useEffect(() => {
		fetchMember();
	}, []);

	return (
		<React.Fragment>
			<div>
				<Sidebar />

				<div className="container mt-4">
					<div className="card">
						{/* <div className="card-header">Featured</div> */}
						<div className="card-body">
							<div className="row">
								<div className="col-md-12">
									<div className="card detail-card">
										<div className="card-body">
											<div className="row detail-head">
												<div className="col-md-10">
													{" "}
													{member.fname +
														" " +
														member.lname}
												</div>
											</div>
											<div className="row detail-head">
												<div className="col-md-8">
													{" "}
													Salary: {member.salary}
												</div>
												<div className="col-md-4 d-flex justify-content-end">
													Monthly Limit: 500000
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* <div className="col-md-1 border"></div> */}
							</div>
						</div>
					</div>
					<div className="card mt-4">
						<div className="card-header">Expenses</div>
						<div className="card-body">
							<div className="card detail-card">
								<div className="card-body">
									<div className="row detail-head">
										<div className="col-md-10">
											{" "}
											Grocery
										</div>
										<div className="col-md-2 d-flex justify-content-end">
											500 INR
										</div>
									</div>
									<div className="row mt-2 detail-foot ">
										<div className="col-md-10"> Food</div>
										<div className="col-md-2 d-flex justify-content-end">
											10/12/22
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button>Add Expense</button>
					<button>Log Out</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default IndividualDashBoard;
export { members };
