// import React from 'react'

import { useShoppingCart } from "../../context/Context";
import { imageUrlFormatter, placeholderImageUrl } from "../../utilities";

const CartItem = ({ id, quantity, productsInCart }) => {
	// let qty = quantity;
	const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
		useShoppingCart();
	const item = productsInCart?.find((product) => product.id === id)?.attributes;
	if (item == null) return null;
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
				<td>$22</td>
				<td>
					<div className='qty'>
						<button
							className='btn-minus'
							onClick={() => decreaseCartQuantity(id)}>
							<i className='fa fa-minus'></i>
						</button>
						<input type='text' value={qty} />
						<button
							className='btn-plus'
							onClick={() => quantity !== qty && increaseCartQuantity(id)}>
							<i className='fa fa-plus'></i>
						</button>
					</div>
				</td>
				<td>$22</td>
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
