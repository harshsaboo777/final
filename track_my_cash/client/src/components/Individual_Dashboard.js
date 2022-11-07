import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import FloatingSidebar from "./Floating_Sidebar";
import "../componentsStyles/group_dashboard.css";
import ExpenseCard from "./Expense_Card";
import members from "./tempMembers";
import { useParams } from "react-router-dom";
import AddIndividualExpense from "./Add_Individual_expense";
import axios from "axios";
import Cookies from "universal-cookie";
import Update_salary from "./update_salary";
import Add_Individual_expense from "./Add_Individual_expense";
import Individual_card from "./Individual_card";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const cookies = new Cookies();
const Expenses = [];
const IndividualDashBoard = () => {
	const Mem_Id = cookies.get("Member").mem_id;
	const [member, setMember] = useState({}); //fname lname salary
	const [membersExpenses, setmembersExpenses] = useState([]);
	const [overall_expense, setoverall_expense] = useState(0);
	const [salary, setsalary] = useState(member.salary);
	const [types, settypes] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const fetchMember = async (e) => {
		await axios
			.get("http://localhost:5000/member/id/" + Mem_Id)
			.then((res) => {
				setMember(res.data);
				setsalary(res.data.salary);
			});
	};
	const fetchTypes = async (e) => {
		await axios.get("http://localhost:5000/member/types").then((res) => {
			settypes(res.data);
		});
	};
	const data = {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [
		  {
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
			  'rgba(255, 99, 132, 0.2)',
			  'rgba(54, 162, 235, 0.2)',
			  'rgba(255, 206, 86, 0.2)',
			  'rgba(75, 192, 192, 0.2)',
			  'rgba(153, 102, 255, 0.2)',
			  'rgba(255, 159, 64, 0.2)',
			],
			borderColor: [
			  'rgba(255, 99, 132, 1)',
			  'rgba(54, 162, 235, 1)',
			  'rgba(255, 206, 86, 1)',
			  'rgba(75, 192, 192, 1)',
			  'rgba(153, 102, 255, 1)',
			  'rgba(255, 159, 64, 1)',
			],
			borderWidth: 1,
		  },
		],
	  };
	const fetchexpenses = async () => {
		await axios
			.get("http://localhost:5000/member/expenses/" + Mem_Id)
			.then((res) => {
				setmembersExpenses(res.data);
			});
	};

	const settotexpense = () => {
		let temp = 0;
		for (let i = 0; i < membersExpenses.length; i++) {
			temp = temp + parseInt(membersExpenses[i].amount);
		}
		setoverall_expense(temp);
	};
	useEffect(() => {
		fetchTypes();
		fetchMember();
		fetchexpenses();
		settotexpense();
	}, []);
	return (
		<React.Fragment>
			<div>
				<Sidebar />

				{modalOpen && (
					<AddIndividualExpense
						setModalOpen={setModalOpen}
						types={types}
					/>
				)}

				<div className="container mt-4">
					<div className="card ">
						{/* <div className="card-header">Featured</div> */}
						<div className="card-body">
							<div className="row">
								<div className="col-md-12">
									<div className="card detail-card">
										<div className="card-body">
											<div className="row detail-head">
												<h3 className="col-md-10">
													{member.fname +
														" " +
														member.lname}
												</h3>
												{console.log(types)}
											</div>
											<div className="row detail-head">
												<div className="col-md-8">
													{" "}
													<h5>Salary : {salary}</h5>
													<div>
														<Update_salary
															Mem_Id={Mem_Id}
															setsalary={
																setsalary
															}
														/>
													</div>
													<h6 className="mt-5">
														Savings:{" "}
														{salary -
															overall_expense}
														.00
													</h6>
												</div>

												<div className="col-md-4 d-flex justify-content-end">
													<h5>
														Total Expense:{" "}
														{overall_expense}.00
													</h5>
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
						{membersExpenses.map((ele) => (
							<Individual_card
								remarks={ele.remarks}
								type={ele.type}
								amount={ele.amount}
								date={ele.date}
							/>
						))}
					</div>
					<Doughnut data={data} />
					<button
						onClick={() => {
							modalOpen
								? setModalOpen(false)
								: setModalOpen(true);
						}}
					>
						Add Expense
					</button>
					<button>Log Out</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default IndividualDashBoard;
export { members };
