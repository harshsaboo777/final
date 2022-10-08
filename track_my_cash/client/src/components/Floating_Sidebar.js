import React from "react";
import "../componentsStyles/floating_sidebar.css";
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';import BalanceIcon from '@mui/icons-material/Balance';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';const Floating_Sidebar = () => {
	return (
		<>
			<div id="floating-panel2">
				<div className="floating-icon">
				<InfoOutlinedIcon fontSize="large" sx={{color:'#ffff'}}/>

				</div>
				<div className="floating-icon">
				<AddCircleOutlineOutlinedIcon fontSize="large" sx={{color:'#ffff'}}/>

				</div>
				<div className="floating-icon">
				<BalanceIcon fontSize="large" sx={{color:'#ffff'}}/>

				</div>
				
				<SettingsIcon fontSize="large" sx={{color:'#ffff'}}/>

				
				{/* <AddCircleIcon fontSize="large"/> */}
				
				{/* <h1>P4</h1> */}
			</div>
		</>
	);
};

export default Floating_Sidebar;
