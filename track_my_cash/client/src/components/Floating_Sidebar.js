import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "../componentsStyles/floating_sidebar.css";
import SettingsIcon from '@mui/icons-material/Settings';
import Add_Group_expense from "./Add_Group_expense";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';import BalanceIcon from '@mui/icons-material/Balance';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Modal from "./Modal";
import { useState } from 'react';
const Floating_Sidebar = () => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
		<div>

		{modalOpen && <Modal setOpenModal={setModalOpen} />}

		<div id="floating-panel2">
				<div className="floating-icon">
				<InfoOutlinedIcon fontSize="large" sx={{color:'#ffff'}}/>

				</div>
				<div className="floating-icon">
				<button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <AddCircleOutlineOutlinedIcon fontSize="large" sx={{color:'#ffff'}}/>
      </button>
	  


{/* 
					<Popup trigger={<button><AddCircleOutlineOutlinedIcon fontSize="large" sx={{color:'#ffff'}}/></button>}>
						<Add_Group_expense />
					</Popup> */}
					

				</div>
				<div className="floating-icon">
				<BalanceIcon fontSize="large" sx={{color:'#ffff'}}/>

				</div>
				
				<SettingsIcon fontSize="large" sx={{color:'#ffff'}}/>

				
				{/* <AddCircleIcon fontSize="large"/> */}
				
				{/* <h1>P4</h1> */}
			</div>




		</div>
			
		</>
	);
};

export default Floating_Sidebar;
