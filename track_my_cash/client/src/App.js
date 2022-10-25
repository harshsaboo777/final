import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Select_Path from "./components/Select_Path";
import GroupDashBoard from "./components/Group_Dashboard";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Evaluation from "./components/Evaluation";
import React, { useState } from "react";
import GroupList from "./components/Group_List";
//import Select_Path from "./components/Select_Path";

function App() {
	const [LoginUser, setLoginUser] = useState({
		mem_id: 0,
		email: "",
		password: "",
	});
	return (
		<>
			{/* <Navbar /> */}
			{/* <SignUp /> */}
			<Routes>
				<Route exact path="/SignUp" element={<SignUp />} />
				<Route exact path="/Select_Path" element={<Select_Path />} />
				<Route exact path="/home" element={<Home />} />
				<Route
					exact
					path="/"
					element={
						LoginUser && LoginUser.email ? (
							<Select_Path User={LoginUser} />
						) : (
							<Login setLoginUser={setLoginUser} />
						)
					}
				/>
				<Route exact path="/Group" element={<GroupDashBoard />} />
				<Route
					exact
					path="/GroupList"
					element={<GroupList User={LoginUser} />}
				/>
				<Route exact path="/Select" element={<Select_Path />} />
				<Route exact path="/Evaluate" element={<Evaluation />} />
			</Routes>
		</>
	);
}

export default App;
