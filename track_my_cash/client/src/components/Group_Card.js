import "../componentsStyles/group_dashboard.css";
import React from "react";

const Group_Card = ({ content }) => {
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
						{content.created_on}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Group_Card;
