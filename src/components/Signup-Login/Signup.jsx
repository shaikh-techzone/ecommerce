import React from "react";

const Signup = () => {
	return (
		<>
			<div className='login'>
				<div className='container'>
					<div class='section-header'>
						<h3>SignUp</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							viverra at massa sit amet ultricies. Nullam consequat, mauris non
							interdum cursus
						</p>
					</div>
					<div className='row' style={{ justifyContent: "center" }}>
						<div className='col-md-6'>
							<div className='register-form'>
								<div className='row'>
									<div className='col-md-6'>
										<label>First Name</label>
										<input
											className='form-control'
											type='text'
											placeholder='First Name'
										/>
									</div>
									<div className='col-md-6'>
										<label>Last Name</label>
										<input
											className='form-control'
											type='text'
											placeholder='Last Name'
										/>
									</div>
									<div className='col-md-6'>
										<label>E-mail</label>
										<input
											className='form-control'
											type='text'
											placeholder='E-mail'
										/>
									</div>
									<div className='col-md-6'>
										<label>Mobile No</label>
										<input
											className='form-control'
											type='text'
											placeholder='Mobile No'
										/>
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

export default Signup;
