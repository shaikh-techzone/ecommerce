import React from "react";
import { convertToUSD } from "../../utilities";

const CheckoutSummary = ({ id, quantity, productsInCart }) => {
	const item = productsInCart?.find((product) => product.id === id)?.attributes;

	if (item == null) return null;
	return (
		<>
			<p>
				{item.title}
				<span>{convertToUSD(item.price * quantity)} </span>
			</p>
		</>
	);
};

export default CheckoutSummary;
