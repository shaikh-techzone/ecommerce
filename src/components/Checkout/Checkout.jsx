import React, { useState } from "react";
// import "./Checkout.css";

const Checkout = () => {
	const [checked, setChecked] = useState(false);
	const [radio1, setRadio1] = useState(false);
	const [radio2, setRadio2] = useState(false);
	const handleCheckbox = () => {
		setChecked(!checked);
	};
	const handleCOD = () => {
		setRadio1(!radio1);
		setRadio2(false);
	};
	const handleDBT = () => {
		setRadio2(!radio2);
		setRadio1(false);
	};
	console.log(checked);
	console.log(radio1);
	console.log(radio2);
	return (
		<>
			<div className='checkout'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-7'>
							<div className='billing-address'>
								<h2>Billing Address</h2>
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
										<label>Last Name"</label>
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
										<label>Address</label>
										<input
											className='form-control'
											type='text'
											placeholder='Address'
										/>
									</div>
									<div className='col-md-6'>
										<label>Country</label>
										<select className='custom-select'>
											<option selected>United States</option>
											<option>Afghanistan</option>
											<option>Albania</option>
											<option>Algeria</option>
										</select>
									</div>
									<div className='col-md-6'>
										<label>City</label>
										<input
											className='form-control'
											type='text'
											placeholder='City'
										/>
									</div>
									<div className='col-md-6'>
										<label>State</label>
										<input
											className='form-control'
											type='text'
											placeholder='State'
										/>
									</div>
									<div className='col-md-6'>
										<label>ZIP Code</label>
										<input
											className='form-control'
											type='text'
											placeholder='ZIP Code'
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
												Create an account
											</label>
										</div>
									</div>
									<div className='col-md-12'>
										<div className='custom-control custom-checkbox'>
											<input
												type='checkbox'
												className='custom-control-input'
												id='shipto'
												checked={checked}
												onChange={handleCheckbox}
											/>
											<label className='custom-control-label' for='shipto'>
												Ship to different address
											</label>
										</div>
									</div>
								</div>
							</div>
							{checked ? (
								<div className='shipping-address'>
									<h2>Shipping Address</h2>
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
											<label>Last Name"</label>
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
											<label>Address</label>
											<input
												className='form-control'
												type='text'
												placeholder='Address'
											/>
										</div>
										<div className='col-md-6'>
											<label>Country</label>
											<select className='custom-select'>
												<option selected>United States</option>
												<option>Afghanistan</option>
												<option>Albania</option>
												<option>Algeria</option>
											</select>
										</div>
										<div className='col-md-6'>
											<label>City</label>
											<input
												className='form-control'
												type='text'
												placeholder='City'
											/>
										</div>
										<div className='col-md-6'>
											<label>State</label>
											<input
												className='form-control'
												type='text'
												placeholder='State'
											/>
										</div>
										<div className='col-md-6'>
											<label>ZIP Code</label>
											<input
												className='form-control'
												type='text'
												placeholder='ZIP Code'
											/>
										</div>
									</div>
								</div>
							) : null}
						</div>
						<div className='col-md-5'>
							<div className='checkout-summary'>
								<h2>Cart Total</h2>
								<div className='checkout-content'>
									<h3>Products</h3>
									<p>
										Product Name<span>$11</span>
									</p>
									<p>
										Product Name<span>$11</span>
									</p>
									<p>
										Product Name<span>$11</span>
									</p>
									<p className='sub-total'>
										Sub Total<span>$22</span>
									</p>
									<p className='ship-cost'>
										Shipping Cost<span>$1</span>
									</p>
									<h4>
										Grand Total<span>$23</span>
									</h4>
								</div>
							</div>

							<div className='checkout-payment'>
								<h2>Payment Methods</h2>
								<div className='payment-methods'>
									{/* <div className='payment-method'>
										<div className='custom-control custom-radio'>
											<input
												type='radio'
												className='custom-control-input'
												id='payment-1'
												name='payment'
											/>
											<label className='custom-control-label' for='payment-1'>
												Paypal
											</label>
										</div>
										<div className='payment-content' id='payment-1-show'>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Cras tincidunt orci ac eros volutpat maximus lacinia
												quis diam.
											</p>
										</div>
									</div>
									<div className='payment-method'>
										<div className='custom-control custom-radio'>
											<input
												type='radio'
												className='custom-control-input'
												id='payment-2'
												name='payment'
											/>
											<label className='custom-control-label' for='payment-2'>
												Payoneer
											</label>
										</div>
										<div className='payment-content' id='payment-2-show'>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Cras tincidunt orci ac eros volutpat maximus lacinia
												quis diam.
											</p>
										</div>
									</div>
									<div className='payment-method'>
										<div className='custom-control custom-radio'>
											<input
												type='radio'
												className='custom-control-input'
												id='payment-3'
												name='payment'
											/>
											<label className='custom-control-label' for='payment-3'>
												Check Payment
											</label>
										</div>
										<div className='payment-content' id='payment-3-show'>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Cras tincidunt orci ac eros volutpat maximus lacinia
												quis diam.
											</p>
										</div>
									</div> */}
									<div className='payment-method'>
										<div className='custom-control custom-radio'>
											<input
												type='radio'
												className='custom-control-input'
												id='payment-4'
												name='payment'
												checked={radio2}
												onChange={handleDBT}
											/>
											<label className='custom-control-label' for='payment-4'>
												Direct Bank Transfer
											</label>
										</div>
										{radio2 ? (
											<div className='payment-content' id='payment-5-show'>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit. Cras tincidunt orci ac eros volutpat maximus
													lacinia quis diam.
												</p>
											</div>
										) : null}
									</div>
									<div className='payment-method'>
										<div className='custom-control custom-radio'>
											<input
												type='radio'
												className='custom-control-input'
												id='payment-5'
												name='payment'
												checked={radio1}
												onChange={handleCOD}
											/>
											<label className='custom-control-label' for='payment-5'>
												Cash on Delivery
											</label>
										</div>
										{radio1 ? (
											<div className='payment-content' id='payment-5-show'>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit. Cras tincidunt orci ac eros volutpat maximus
													lacinia quis diam.
												</p>
											</div>
										) : null}
									</div>
								</div>
								<div className='checkout-btn'>
									<button>Place Order</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkout;
