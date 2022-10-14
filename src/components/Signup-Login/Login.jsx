import React from "react";

const Login = ({
	identifier,
	onValueChangeHandler,
	submitHandler,
	password,
}) => {
	return (
		<>
			<div className='login'>
				<div className='container'>
					<div className='section-header'>
						<h3>Login</h3>
						{/* <p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							viverra at massa sit amet ultricies. Nullam consequat, mauris non
							interdum cursus
						</p> */}
					</div>
					<div className='row' style={{ justifyContent: "center" }}>
						<div className='col-md-6'>
							<form
								className='login-form'
								onSubmit={submitHandler}
								autoComplete='off'
								autoCapitalize='off'>
								<div className='row'>
									<div className='col-md-6'>
										<label>E-mail</label>
										<input
											className='form-control'
											type='text'
											placeholder='Enter your E-mail'
											name={"identifier"}
											value={identifier}
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
									{/* <div className='col-md-12'>
										<div className='custom-control custom-checkbox'>
											<input
												type='checkbox'
												className='custom-control-input'
												id='newaccount'
											/>
											<label className='custom-control-label' for='newaccount'>
												Keep me signed in
											</label>
										</div>
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

export default Login;
