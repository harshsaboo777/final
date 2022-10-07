import React from "react";
import Sidebar from "./Sidebar";
import Floating_Sidebar from "./Floating_Sidebar";
import "../componentsStyles/group_dashboard.css";
const GroupDashBoard = () => {
	return (
		<React.Fragment>
			<div>
				<Sidebar />
				<Floating_Sidebar />

				<div className="container ">
					<div className="card">
						<div className="card-header">Featured</div>
						<div className="card-body">
							<div className="row">
								<div className="col-md-12">
									<div className="card detail-card">
										<div className="card-body">
											This is some text within a card
											body.
										</div>
									</div>
									<div className="card detail-card">
										<div className="card-body">
											This is some text within a card
											body.
										</div>
									</div>
									<div className="card detail-card">
										<div className="card-body">
											This is some text within a card
											body.
										</div>
									</div>
									<div className="card detail-card">
										<div className="card-body">
											This is some text within a card
											body.
										</div>
									</div>
									<div className="card detail-card">
										<div className="card-body">
											This is some text within a card
											body.
										</div>
									</div>
									<div className="card detail-card">
										<div className="card-body">
											This is some text within a card
											body.
										</div>
									</div>
									<div className="card detail-card">
										<div className="card-body">
											This is some text within a card
											body.
										</div>
									</div>
								</div>
								{/* <div className="col-md-1 border"></div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default GroupDashBoard;
