import React from "react";
import "../componentsStyles/floating_sidebar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import BalanceIcon from "@mui/icons-material/Balance";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddGroupExpense from "./Add_Group_expense";
import AddNewGroup from "./Add_new_Group";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Floating_Sidebar_grouplist = ({ logo, state, setState }) => {
	const [modal1Open, setModal1Open] = useState(false);
	const navigate = useNavigate();

	return (
		<>
			<div>
				{modal1Open && (
					<AddNewGroup
						setOpenModal={setModal1Open}
						state={state}
						setState={setState}
					/>
				)}

				<div id="floating-panel2">
					<div className="floating-icon">
						<InfoOutlinedIcon
							fontSize="large"
							sx={{ color: "#ffff" }}
						/>
					</div>
					{logo.flag && (
						<div className="floating-icon">
							<button
								className="openModalBtn"
								onClick={() => {
									modal1Open
										? setModal1Open(false)
										: setModal1Open(true);
								}}
							>
								<GroupAddIcon
									fontSize="large"
									sx={{ color: "#ffff" }}
								/>
							</button>

							{/* 
					<Popup trigger={<button><AddCircleOutlineOutlinedIcon fontSize="large" sx={{color:'#ffff'}}/></button>}>
						<Add_Group_expense />
					</Popup> */}
						</div>
					)}

					<div className="floating-icon">
						<button
							className="openModalBtn"
							onClick={() => navigate("/Evaluate")}
						>
							<BalanceIcon
								fontSize="large"
								sx={{ color: "#ffff" }}
							/>
						</button>
					</div>

					<SettingsIcon fontSize="large" sx={{ color: "#ffff" }} />

					{/* <AddCircleIcon fontSize="large"/> */}

					{/* <h1>P4</h1> */}
				</div>
			</div>
		</>
	);
};

export default Floating_Sidebar_grouplist;
