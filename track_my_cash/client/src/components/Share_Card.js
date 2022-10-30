import React from "react";

const Share_Card = ({ content }) => {
	
	return (
		<div className="row">
								<div className="col-md-12">
									<div className="card detail-card">
										<div className="card-body">
											<div className="row detail-head">
												<div className="col-md-10">
													
													{content.fname+" "+content.lname}
												</div>
												<div className="col-md-2 d-flex justify-content-end text-success">
												{content.amount_due}
												</div>
											</div>
											
										</div>
									</div>
								</div>
								{/* <div className="col-md-1 border"></div> */}
							</div>
	);
};

export default Share_Card;
