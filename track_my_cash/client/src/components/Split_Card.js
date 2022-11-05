import React from "react";

const Split_Card = ({ content }) => {
	return (
		<div className="row">
			<div className="col-md-12">
				<div className="card detail-card">
					<div className="card-body">
						<div className="row detail-head">
							<div className="col-md-10">{content.Name2}</div>
							<div className="col-md-2 d-flex justify-content-end">
								{content.val} INR
							</div>
						</div>
						<div className="row mt-2 detail-foot ">
							<div className="col-md-10">
								{" "}
								Should pay to {content.Name1}
							</div>
							{/* <div className="col-md-2 d-flex justify-content-end">31 Jan,2021</div> */}
						</div>
					</div>
				</div>
			</div>
			{/* <div className="col-md-1 border"></div> */}
		</div>
	);
};

export default Split_Card;
