import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { constant } from "../../constants";
import { useAuthAndCartContext } from "../../context/Context";
import { fetchCartProductsList } from "../../store/slices/products";
import { convertToUSD, errors } from "../../utilities";
import CheckoutSummary from "./CheckoutSummary";
// import "./Checkout.css";
const stripePromise = loadStripe(constant.STRIPE_PK);
const Checkout = () => {
	const dispatch = useDispatch();
	const { isLoading, error, productsInCart } = useSelector(
		(state) => state.product
	);
	const { cartItems, cartQuantity, clearCart, user } = useAuthAndCartContext();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const filterIds = cartItems
			.map((item, index) => `filters[id][$in][${index}]=${item.id}`)
			.join("&");
		dispatch(
			fetchCartProductsList(`/api/products?${filterIds}&populate=image`)
		);
	}, [cartItems.length]);
	// const item = productsInCart?.find((product) => product.id === id)?.attributes;
	console.log(cartItems);
	console.log(productsInCart);
	// const [checked, setChecked] = useState(false);
	// const [radio1, setRadio1] = useState(false);
	// const [radio2, setRadio2] = useState(false);
	// const handleCheckbox = () => {
	// 	setChecked(!checked);
	// };
	// const handleCOD = () => {
	// 	setRadio1(!radio1);
	// 	setRadio2(false);
	// };
	// const handleDBT = () => {
	// 	setRadio2(!radio2);
	// 	setRadio1(false);
	// };
	// console.log(checked);
	// console.log(radio1);
	// console.log(radio2);
	const calculateTotal = (cartItems) => {
		if (productsInCart?.length > 0) {
			return cartItems.reduce((total, cartItem) => {
				const item = productsInCart?.find(
					(i) => i.id === cartItem.id
				)?.attributes;
				return total + (item?.price || 0) * cartItem.quantity;
			}, 0);
		}
	};

	const checkout = async () => {
		// https://dmitripavlutin.com/remove-object-property-javascript/

		try {
			setLoading(true);
			if (!user?.user?.billingAddress) {
				errors("Please fill address filled first for shipping order!");
				return;
			}

			const { id, ...billingAddress } = user?.user?.billingAddress;
			const order = {
				total: calculateTotal(cartItems),
				user: user?.user.id,
				status: "unpaid",
				products: cartItems?.map((item) => item.id),
				quantityWithProductIds: cartItems,
				address: billingAddress,
			};

			const stripe = await stripePromise;
			const { data } = await axios(`/api/orders`, {
				method: "POST",
				data: JSON.stringify({ data: order }),
			});
			const result = await stripe.redirectToCheckout({
				sessionId: data?.session_id,
			});
			console.log({ result });
		} catch (error) {
			errors(error.message);
			console.log({ error: error.message });
		} finally {
			setLoading(false);
		}
	};
	return (
		<>
			{!isLoading && error && <h1>{error}</h1>}
			{isLoading ? (
				<h1>Loading ...</h1>
			) : cartItems?.length > 0 ? (
				<div className='checkout'>
					<div className='container'>
						<div className='row'>
							{/* <div className='col-md-7'>
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
											<button>Update</button>
										</div>
									</div>
								</div>
							</div> */}
							<div className='col-md-12'>
								<div className='checkout-summary'>
									<h2>Order Summary</h2>
									<div className='checkout-content'>
										<h3>Products</h3>
										{cartItems.map((item, index) => (
											<CheckoutSummary
												key={index}
												{...item}
												productsInCart={productsInCart}
											/>
										))}
										{/* <p className='sub-total'>
											Sub Total
											<span>
												{convertToUSD(
													cartItems.reduce((total, cartItem) => {
														// console.log(total);
														const item = productsInCart?.find(
															(i) => i.id === cartItem.id
														)?.attributes;
														return (
															total + (item?.price || 0) * cartItem.quantity
														);
													}, 0)
												)}
											</span>
										</p>
										<p className='ship-cost'>
											Shipping Cost<span>{convertToUSD(150)}</span>
										</p> */}
										<h4>
											Grand Total
											<span>
												{convertToUSD(
													cartItems.reduce((total, cartItem) => {
														// console.log(total);
														const item = productsInCart?.find(
															(i) => i.id === cartItem.id
														)?.attributes;
														return (
															total + (item?.price || 0) * cartItem.quantity
														);
													}, 0)
												)}
											</span>
										</h4>
									</div>
								</div>

								<div className='checkout-payment'>
									{/* <h2>Payment Methods</h2> */}
									{/* <div className='payment-methods'>
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
								</div> */}
									<div className='checkout-btn'>
										<button onClick={checkout}>Place Order</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<h2>Nothing to Checkout</h2>
			)}
		</>
	);
};

export default Checkout;
