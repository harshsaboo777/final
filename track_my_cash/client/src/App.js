import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import GroupDashBoard from "./components/Group_Dashboard";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			{/* <Navbar /> */}
			{/* <SignUp /> */}
			<Routes>
				<Route exact path="/SignUp" element={<SignUp />} />
				<Route exact path="/Login" element={<Login />} />
				<Route exact path="/Group" element={<GroupDashBoard />} />
			</Routes>
		</>
	);
}

export default App;
