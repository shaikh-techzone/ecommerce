import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useShoppingCart } from "../../context/Context";
import CartItem from "./CartItem";
import { fetchCartProductsList } from "../../store/slices/products";
import { convertToUSD } from "../../utilities";

const Cart = () => {
	const dispatch = useDispatch();
	const { cartItems, cartQuantity, clearCart } = useShoppingCart();
	const { isLoading, error, productsInCart } = useSelector(
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
	return (
		<>
			{/* {" "} */}
			{!isLoading && error && <h1>{error}</h1>}
			{isLoading ? (
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
										<p>
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
										<p>
											Shipping Cost<span>{convertToUSD(150)}</span>
										</p>
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
															total +
															(item?.price || 0) * cartItem.quantity +
															150
														);
													}, 0)
												)}
											</span>
										</h4>
									</div>
									<div className='cart-btn'>
										<button onClick={() => clearCart()}>Clear Cart</button>
										<button>Checkout</button>
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
