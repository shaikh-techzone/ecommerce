import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthAndCartContext } from "../../context/Context";
import CartItem from "./CartItem";
import { fetchCartProductsList } from "../../store/slices/products";
import { convertToUSD, errors } from "../../utilities";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { constant } from "../../constants";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
	const stripePromise = loadStripe(constant.STRIPE_PK);
	const dispatch = useDispatch();
	const { cartItems, clearCart, user } = useAuthAndCartContext();
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);

	const { isLoadingCart, errorCart, productsInCart } = useSelector(
		(state) => state.product
	);

	useEffect(() => {
		const filterIds = cartItems
			.map((item, index) => `filters[id][$in][${index}]=${item.id}`)
			.join("&");
		dispatch(
			fetchCartProductsList(`/api/products?${filterIds}&populate=image`)
		);
	}, [cartItems.length]);

	const login = () => {
		// closeCart();
		navigate("/auth/login");
	};

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
				method: "post",
				data: JSON.stringify({ data: order }),
			});
			console.log(data);
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
			{/* {" "} */}
			{!isLoadingCart && errorCart && <h1>{errorCart}</h1>}
			{isLoadingCart ? (
				<h1>Loading ...</h1>
			) : cartItems?.length > 0 ? (
				<div className='cart-page'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-12'>
								<div className='table-responsive'>
									<table className='table table-bordered'>
										<thead className='thead-dark'>
											<tr>
												<th>Image</th>
												<th>Name</th>
												<th>Price</th>
												<th>Quantity</th>
												<th>Total</th>
												<th>Remove</th>
											</tr>
										</thead>
										<tbody className='align-middle'>
											{cartItems.map((item, index) => (
												<CartItem
													key={index}
													{...item}
													productsInCart={productsInCart}
												/>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-12'>
								<div className='cart-summary'>
									<div className='cart-content'>
										<h3>Cart Summary</h3>
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
									<div className='cart-btn'>
										<button onClick={() => clearCart()}>Clear Cart</button>
										{Object.keys(user || {}).length > 0 ? (
											<button
												// onClick={() => {
												// 	navigate("/checkout");
												// }}
												onClick={checkout}>
												Checkout
											</button>
										) : (
											<button onClick={login}>Login</button>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<h2 style={{ textAlign: "center", marginTop: "10px" }}>
					No items in cart
				</h2>
			)}
		</>
	);
};

export default Cart;
