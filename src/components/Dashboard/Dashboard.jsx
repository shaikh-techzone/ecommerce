import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthAndCartContext } from "../../context/Context";
import { convertToUSD, errors, success } from "../../utilities";
import moment from "moment";

const Dashboard = () => {
	const { user, login } = useAuthAndCartContext();
	const [isLoading, setIsLoading] = useState(false);
	const [profile, setProfile] = useState(null);
	// Orders State
	let [orders, setOrders] = useState([]);
	const [_isLoading, _setIsLoading] = useState(false);
	const [error, setError] = useState("");

	let [userDetails, setUserDetails] = useState(() => {
		const { firstName, lastName, billingAddress, email, username } = user?.user;

		return {
			firstName,
			lastName,
			email,
			username,
			country: billingAddress ? billingAddress.country : "",
			city: billingAddress ? billingAddress.city : "",
			zipCode: billingAddress ? billingAddress.zipCode : "",
			address: billingAddress ? billingAddress.address : "",
			state: billingAddress ? billingAddress.state : "",
			mobileNumber: billingAddress ? billingAddress.mobileNumber : "",
		};
	});
	const {
		firstName,
		lastName,
		email,
		username,
		country,
		city,
		zipCode,
		address,
		state,
		mobileNumber,
	} = userDetails;

	const onValueChangeHandler = ({ target: { name, value } }) => {
		setUserDetails({ ...userDetails, [name]: value });
	};

	const updateProfileHandler = async (e) => {
		e.preventDefault();

		let formData = new FormData();
		formData.append("files.profile", profile);
		userDetails = {
			firstName,
			lastName,
			email,
			username,
			billingAddress: { country, city, zipCode, address, state, mobileNumber },
		};
		formData.append("data", JSON.stringify(userDetails));

		try {
			setIsLoading(true);
			const { data } = await axios(`/api/users/${user?.user?.id}`, {
				method: "PUT",
				data: JSON.stringify(userDetails),
				// data: formData,
			});

			if (Object.keys(data).length > 0) {
				const { data: userData } = await axios(
					`/api/users/${data?.id}?populate=firstName,lastName,billingAddress,profile`
				);

				login({
					...user,
					user: userData,
				});
			}

			success("Profile Updated Successfully!");
		} catch ({ message }) {
			console.log(message);
			errors("Facing error while updating profile!");
		} finally {
			setIsLoading(false);
		}
	};
	// Orders
	const getAllOrders = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios(
				`/api/orders?populate=user&filters[user]=${user?.user?.id}`
			);
			setOrders(data?.data);
		} catch (error) {
			setError("Order Error", error.message);
		} finally {
			_setIsLoading(false);
		}
	};

	useEffect(() => {
		getAllOrders();
	}, [user?.user?.id, orders?.length]);

	return (
		<>
			<div className='my-account'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-3'>
							<div
								className='nav flex-column nav-pills'
								role='tablist'
								aria-orientation='vertical'>
								<a
									className='nav-link'
									id='account-nav'
									data-toggle='pill'
									href='#account-tab'
									role='tab'>
									Account Details
								</a>
								<a
									className='nav-link'
									id='orders-nav'
									data-toggle='pill'
									href='#orders-tab'
									role='tab'>
									Orders
								</a>
							</div>
						</div>
						<div className='col-md-9'>
							<div className='tab-content'>
								<div
									className='tab-pane fade'
									id='orders-tab'
									role='tabpanel'
									aria-labelledby='orders-nav'>
									<div className='table-responsive'>
										<table className='table table-bordered'>
											<thead className='thead-dark'>
												<tr>
													<th>No</th>
													<th>Price</th>
													<th>Date</th>
													<th>Status</th>
												</tr>
											</thead>
											<tbody>
												{orders.length > 0 ? (
													orders.map(
														({
															id,
															attributes: {
																total,
																status,
																quantityWithProductIds,
																createdAt,
															},
														}) => (
															<tr>
																<td>{id}</td>
																<td>{convertToUSD(total)}</td>
																<td>{moment(createdAt).fromNow()}</td>
																<td>{status}</td>
															</tr>
														)
													)
												) : (
													<h1>No Orders</h1>
												)}
											</tbody>
										</table>
									</div>
								</div>
								<div
									className='tab-pane fade show active'
									id='account-tab'
									role='tabpanel'
									aria-labelledby='account-nav'>
									<h4>Account Details</h4>
									<form className='row' onSubmit={updateProfileHandler}>
										<div className='col-md-4'>
											<label>First Name</label>
											<input
												type='text'
												placeholder='First Name'
												name='firstName'
												value={firstName}
												onChange={onValueChangeHandler}
											/>
										</div>
										<div className='col-md-4'>
											<label>Last Name</label>
											<input
												type='text'
												placeholder='Last Name'
												name='lastName'
												value={lastName}
												onChange={onValueChangeHandler}
											/>
										</div>
										<div className='col-md-4'>
											<label>User Name</label>
											<input
												type='text'
												placeholder='Username'
												name='username'
												value={username}
												onChange={onValueChangeHandler}
											/>
										</div>
										<div className='col-md-4'>
											<label>Email</label>
											<input
												type='email'
												placeholder='Email'
												name='email'
												value={email}
												onChange={onValueChangeHandler}
											/>
										</div>
										<div className='col-md-4'>
											<label>Mobile Number</label>
											<input
												type='tel'
												placeholder='Mobile Number'
												name='mobileNumber'
												value={mobileNumber}
												onChange={onValueChangeHandler}
											/>
										</div>
										<div className='col-md-4'>
											<label>Country</label>
											<input
												type='text'
												placeholder='Country'
												name='country'
												value={country}
												onChange={onValueChangeHandler}
											/>
										</div>
										<div className='col-md-4'>
											<label>City</label>
											<input
												type='text'
												placeholder='City'
												name='city'
												value={city}
												onChange={onValueChangeHandler}
											/>
										</div>
										<div className='col-md-4'>
											<label>Zip Code</label>
											<input
												type='number'
												placeholder='Zip Code'
												name='zipCode'
												value={zipCode}
												onChange={onValueChangeHandler}
											/>
										</div>
										<div className='col-md-4'>
											<label>State</label>
											<input
												type='text'
												placeholder='State'
												name='state'
												value={state}
												onChange={onValueChangeHandler}
											/>
										</div>
										<div className='col-md-12'>
											<label>Address</label>
											<input
												type='text'
												placeholder='Address'
												name='address'
												value={address}
												onChange={onValueChangeHandler}
											/>
										</div>
										<div className='col-md-12'>
											<button type='submit'>Update Account</button>
											<br></br>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
