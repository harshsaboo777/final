import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../componentsStyles/modal.css";

import axios from "axios";
import Cookies from "universal-cookie";
let members = [];

function Add_new_Group({ setOpenModal, state, setState }) {
	const cookies = new Cookies();
	const Member_Id = cookies.get("Member").mem_id;
	const getCurrentDate = (separator = "/") => {
		let newDate = new Date();
		let date = newDate.getDate();
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();

		return `${year}${separator}${
			month < 10 ? `0${month}` : `${month}`
		}${separator}${date}`;
	};
	const [group, setgroup] = useState({
		owner_id: Member_Id,
		name: "",
		created_on: getCurrentDate(),
	});
	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setgroup({ ...group, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setgroup({ ...group, created_on: getCurrentDate() });
		console.log(group);

		axios.post("http://localhost:5000/groups/add", group).then((res) => {
			console.log(res);
		});

		setOpenModal(false);
		window.location.reload();
	};

	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<div className="titleCloseBtn">
					<button
						onClick={() => {
							setOpenModal(false);
						}}
					>
						X
					</button>
				</div>
				<div className="title">
					<h1>Add New Group</h1>
				</div>
				<div className="body">
					<p>
						<div className="card">
							<form action="" onSubmit={handleSubmit}>
								<input
									type="text"
									class="form-control"
									name="name"
									value={group.name}
									onChange={handleInput}
									placeholder="Group Name"
								/>
							</form>
						</div>
					</p>
				</div>
				<div className="footer">
					<button
						onClick={() => {
							setOpenModal(false);
						}}
						id="cancelBtn"
					>
						Cancel
					</button>
					<button type="submit" onClick={handleSubmit}>
						Add
					</button>
				</div>
			</div>
		</div>
	);
}

export default Add_new_Group;
export { members };
