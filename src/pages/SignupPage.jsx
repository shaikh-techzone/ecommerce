import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "../components/Signup-Login/Signup";
import { errors, success } from "../utilities";

const SignupPage = () => {
	const navigate = useNavigate();

	const [signup, setSignup] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	const { username, email, password } = signup;

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			await axios(`/api/auth/local/register`, {
				method: "POST",
				data: JSON.stringify(signup),
			});
			success("Successfully Register");
			navigate("/auth/login");
			// setSignup({ username: "", email: "", password: "" });
		} catch ({ message }) {
			console.log(message);
			errors("Email or Username are already taken");
		} finally {
			setIsLoading(false);
		}
	};

	const onValueChangeHandler = ({ target: { name, value } }) => {
		setSignup({ ...signup, [name]: value });
	};
	return (
		<>
			<Signup
				email={email}
				onValueChangeHandler={onValueChangeHandler}
				password={password}
				username={username}
				submitHandler={submitHandler}
			/>
		</>
	);
};

export default SignupPage;
