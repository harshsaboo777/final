import React, { useState } from "react";
import styles from "../componentsStyles/SignUp.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import axios from "axios";
const Login = ({ setLoginUser }) => {
	const [user, setuser] = useState({
		email: "",
		password: "",
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(user);
		axios
			.post("http://localhost:5000/auth/login", user)
			.then((res) => {
				alert(res.data);
				setLoginUser(user);
			})
			.catch((err) => {
				alert("Incorrect Email or Password ");
			});
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setuser({
			...user,
			[name]: value,
		});
	};
	return (
		<React.Fragment>
			<div className={styles.container}>
				<div className={styles.loginbox}>
					<p className={styles.logintext}>Login with social media</p>

					<div className={styles.loginsocial}>
						<a href="#" className={styles.facebook}>
							<FacebookIcon /> Facebook{" "}
						</a>
						<a href="#" className={styles.twitter}>
							<TwitterIcon /> Twitter{" "}
						</a>
						<a href="#" className={styles.google}>
							<GoogleIcon /> Google{" "}
						</a>
						<a href="#" className={styles.linkedin}>
							<LinkedInIcon /> Linkedin{" "}
						</a>
					</div>

					<form method="#" className={styles.loginemail}>
						<p className={styles.logintext}>Login with email</p>
						<div className={styles.inputgroup}>
							<input
								type="text"
								placeholder="Email Address"
								name="email"
								value={user.email}
								onChange={handleChange}
								required
							/>
						</div>

						<div className={styles.inputgroup}>
							<input
								type="password"
								placeholder="Password"
								name="password"
								value={user.password}
								onChange={handleChange}
								required
							/>
						</div>
						<div className={styles.inputgroup}>
							<button
								className={styles.btn}
								name="submit"
								onClick={handleSubmit}
							>
								Login
							</button>
						</div>
						<p className={styles.loginregistertext}>
							Don't have an account?{" "}
							<a href="register.php">Register Here</a>
						</p>
					</form>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Login;
