import React from "react";

const Login = () => {
	return (
		<>
			<div className='login'>
				<div className='container'>
					<div class='section-header'>
						<h3>Login</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							viverra at massa sit amet ultricies. Nullam consequat, mauris non
							interdum cursus
						</p>
					</div>
					<div className='row' style={{ justifyContent: "center" }}>
						<div className='col-md-6'>
							<div className='login-form'>
								<div className='row'>
									<div className='col-md-6'>
										<label>E-mail / Username</label>
										<input
											className='form-control'
											type='text'
											placeholder='E-mail'
										/>
									</div>
									<div className='col-md-6'>
										<label>Password</label>
										<input
											className='form-control'
											type='text'
											placeholder='Password'
										/>
									</div>
									<div className='col-md-12'>
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
									</div>
									<div className='col-md-12'>
										<button className='btn'>Submit</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
