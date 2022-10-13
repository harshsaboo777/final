import React from "react";
import Sidebar from "./Sidebar";
import GroupsIcon from "@mui/icons-material/Groups";

const styles = {
	largeIcon: {
		width: 60,
		height: 600,
	},
};

function Select_Path() {
	return (
		<div>
			<React.Fragment>
				<div className="container mt-4">
					<div className="row justify-content-around">
						<div className="col-md-4 shadow p-3 mb-5 bg-white rounded text-center">
							<GroupsIcon style={{ fontSize: 350 }} />
						</div>
						<div className="col-md-4 shadow p-3 mb-5 bg-white rounded">
							sdsd
						</div>
					</div>
				</div>
			</React.Fragment>
		</div>
	);
}

export default Select_Path;
