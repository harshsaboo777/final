import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import FloatingSidebar from "./Floating_Sidebar";
import "../componentsStyles/group_dashboard.css";
import Group_Card from "./Group_Card";
import groups from "./tempGroups";
import axios from "axios";
import Cookies from 'universal-cookie';
// import members from "./Add_Group_expense";

const cookies = new Cookies;
const GroupList = ({ User }) => {
	const [groupsArr, setgroupsArr] = useState(groups);
	const onChangeState = (newState) => {
		setgroupsArr(newState);
		console.log(groupsArr);
	};
	useEffect(() => {
		const fetchGroups = async (e) => {
			await axios
				.post("http://localhost:5000/groups", cookies.get('Member'))
				.then((res) => {
					console.log(res.data);
					setgroupsArr(res.data.rows);
				});
		};
		fetchGroups();
	}, []);

	return (
		<React.Fragment>
			<div>
				<Sidebar />
				<FloatingSidebar
					logo={{ flag: true }}
					state={groupsArr}
					setState={onChangeState}
				/>

				<div className="container mt-4">
					<div className="card">
						<div className="card-header">Featured</div>
						<div className="card-body">
							<div className="row">
								<div className="col-md-12">
									{groupsArr.map((group) => {
										return <Group_Card content={group} />;
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

export default GroupList;
export { groups };
