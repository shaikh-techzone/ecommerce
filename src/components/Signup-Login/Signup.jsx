import React from "react";

const Signup = ({
	username,
	email,
	password,
	submitHandler,
	onValueChangeHandler,
}) => {
	return (
		<>
			<div className='login'>
				<div className='container'>
					<div className='section-header'>
						<h3>SignUp</h3>
						{/* <p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							viverra at massa sit amet ultricies. Nullam consequat, mauris non
							interdum cursus
						</p> */}
					</div>
					<div className='row' style={{ justifyContent: "center" }}>
						<div className='col-md-6'>
							<form
								className='register-form'
								autoCapitalize='off'
								autoComplete='off'
								onSubmit={submitHandler}>
								<div className='row'>
									<div className='col-md-6'>
										<label>User Name</label>
										<input
											className='form-control'
											type='text'
											placeholder='Enter your username'
											name={"username"}
											value={username}
											onChange={onValueChangeHandler}
										/>
									</div>
									<div className='col-md-6'>
										<label>Email</label>
										<input
											className='form-control'
											type='email'
											placeholder='Enter your email'
											name={"email"}
											value={email}
											onChange={onValueChangeHandler}
										/>
									</div>
									<div className='col-md-6'>
										<label>Password</label>
										<input
											className='form-control'
											type='password'
											placeholder='Enter your password'
											name={"password"}
											value={password}
											onChange={onValueChangeHandler}
										/>
									</div>
									{/* <div className='col-md-6'>
										<label>Mobile No</label>
										<input
											className='form-control'
											type='text'
											placeholder='Mobile No'
										/>
									</div> */}
									<div className='col-md-12'>
										<button className='btn'>Submit</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
