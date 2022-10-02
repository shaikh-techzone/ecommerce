import React from "react";
import { useShoppingCart } from "../../context/Context";

export const IncreaseDecrease = ({ id, quantity, qty }) => {
	// qty = item in cart
	// quantity = item in stock
	const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
		useShoppingCart();
	return (
		<>
			<button
				className='btn-minus'
				disabled={qty === 1 ? true : false}
				onClick={() => decreaseCartQuantity(id)}>
				<i className='fa fa-minus'></i>
			</button>
			<input type='text' value={qty} />
			<button
				className='btn-plus'
				onClick={() => quantity !== qty && increaseCartQuantity(id)}
				disabled={quantity === qty ? true : false}>
				<i className='fa fa-plus'></i>
			</button>
		</>
	);
};
