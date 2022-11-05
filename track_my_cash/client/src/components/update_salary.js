import React from "react";
import axios from "axios";
import { useState } from "react";
const iid = 2;

export default function Update_salary(props) {
	const user_id = props.Mem_Id;
	const [salary, setsalary] = useState(0);

	const handlechange = (event) => {
		const newsalary = event.target.value;
		setsalary(newsalary);
	};

	const handleclick = async () => {
		console.log("update");
		props.setsalary(salary);
		try {
			axios
				.post("http://localhost:5000/member/updatesalary", {
					user_id,
					salary,
				})
				.catch((err) => {
					alert("Unable to update");
				});
		} catch (err) {
			console.log(err);
		}
		console.log("update");
	};

	return (
		<>
			<button
				type="button"
				class="btn btn-warning "
				data-toggle="modal"
				data-target={`#id${iid}`}
			>
				Update Salary
			</button>

			<div class="modal" id={`id${iid}`}>
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title">Enter the new salary</h4>
							<button
								type="button"
								class="close"
								data-dismiss="modal"
							>
								&times;
							</button>
						</div>

						<div class="modal-body ">
							<input
								type="number"
								className="form-control text-center"
								placeholder="new salary"
								value={salary}
								onChange={handlechange}
							/>
						</div>

						<div class="modal-footer">
							<button
								type="button"
								class="btn btn-warning"
								onClick={handleclick}
								data-dismiss="modal"
							>
								Update
							</button>
							<button
								type="button"
								class="btn btn-danger"
								data-dismiss="modal"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
