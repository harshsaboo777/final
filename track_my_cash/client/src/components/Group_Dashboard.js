import React, { useState } from "react";
import Sidebar from "./Sidebar";
import FloatingSidebar from "./Floating_Sidebar";
import "../componentsStyles/group_dashboard.css";
import ExpenseCard from "./Expense_Card";
import members from "./tempMembers";
// import members from "./Add_Group_expense";

const GroupDashBoard = () => {
	const [membersArr, setmembersArr] = useState(members);
	const onChangeState = (newState) => {
		setmembersArr(newState);
	};
	return (
		<React.Fragment>
			<div>
				<Sidebar />
				<FloatingSidebar
					logo={{ flag: true }}
					state={membersArr}
					setState={onChangeState}
				/>

				<div className="container mt-4">
					<div className="card">
						<div className="card-header">Featured</div>
						<div className="card-body">
							<div className="row">
								<div className="col-md-12">
									{members.map((member) => {
										return <ExpenseCard content={member} />;
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default GroupDashBoard;
export { members };
