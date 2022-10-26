import "../componentsStyles/group_dashboard.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Group_Card = ({ content }) => {
	const navigate = useNavigate();

	return (
		<div className="card detail-card">
			<div className="card-body">
				<div className="row detail-head">
					<div className="col-md-10"> {content.name}</div>
					<div className="col-md-2 d-flex justify-content-end">
						By {content.owner_name}
					</div>
				</div>
				<div className="row mt-2 detail-foot ">
					<div className="col-md-10"></div>
					<div className="col-md-2 d-flex justify-content-end">
						<button onClick={() => navigate("/Group")}>View Details</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Group_Card;
