// import React from 'react'

import { useShoppingCart } from "../../context/Context";
import {
	convertToUSD,
	imageUrlFormatter,
	placeholderImageUrl,
} from "../../utilities";
import { IncreaseDecrease } from "../Button/IncreaseDecrease";

const CartItem = ({ id, quantity, productsInCart }) => {
	// let qty = quantity;
	const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
		useShoppingCart();
	const item = productsInCart?.find((product) => product.id === id)?.attributes;
	// console.log(item);
	// console.log(quantity);
	if (item == null) return null;
	// console.log(item);
	return (
		<>
			<tr>
				<td>
					<a href='#'>
						<img
							src={
								item?.image?.data
									? imageUrlFormatter(item?.image?.data?.attributes?.url)
									: placeholderImageUrl
							}
							alt='Image'
						/>
					</a>
				</td>
				<td>
					<p>{item.title}</p>
				</td>
				<td>{convertToUSD(item.price)}</td>
				<td>
					<div className='qty'>
						<IncreaseDecrease id={id} qty={quantity} quantity={item.quantity} />
					</div>
				</td>
				<td>{convertToUSD(item.price * quantity)}</td>
				<td>
					<button onClick={() => removeFromCart(id)}>
						<i className='fa fa-trash'></i>
					</button>
				</td>
			</tr>
		</>
	);
};

export default CartItem;
