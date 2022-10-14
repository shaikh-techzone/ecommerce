import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Signup-Login/Login";
import { useAuthAndCartContext } from "../context/Context";
import { errors, imageUrlFormatter } from "../utilities";

const LoginPage = () => {
	const { login: signIn, user } = useAuthAndCartContext();

	const navigate = useNavigate();

	const [login, setLogin] = useState({
		identifier: "",
		password: "",
	});

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (Object.keys(user || {}).length > 0) {
			navigate("/products");
		}
	}, [Object.keys(user || {}).length]);

	const { identifier, password } = login;

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			setIsLoading(true);
			const { data } = await axios(`/api/auth/local`, {
				method: "POST",
				data: JSON.stringify(login),
			});
			const { data: userData } = await axios(
				`/api/users/${data?.user?.id}?populate=firstName, lastName, billingAddress, profile`
			);
			const userProfile = {
				jwt: data.jwt,
				user: {
					...data.user,
					billingAddress: userData?.billingAddress,
					firstName: userData?.firstName,
					lastName: userData?.lastName,
					profile: userData?.profile?.data
						? imageUrlFormatter(userData?.profile?.data?.attributes.url)
						: userData?.profile?.data,
				},
			};
			signIn(userProfile);

			// here its your choice to redirect user to whatever page you want as a successful login or simply set input fields and show a success message
			navigate("/products");

			// OR
			// success("Successfully Login");
			// setLogin({ identifier: "", password: "" });
		} catch ({ message }) {
			console.log(message);
			errors("Invalid identifier or password");
		} finally {
			setIsLoading(false);
		}
	};

	const onValueChangeHandler = ({ target: { name, value } }) => {
		setLogin({ ...login, [name]: value });
	};
	return (
		<>
			<Login
				identifier={identifier}
				onValueChangeHandler={onValueChangeHandler}
				submitHandler={submitHandler}
				password={password}
			/>
		</>
	);
};

export default LoginPage;
