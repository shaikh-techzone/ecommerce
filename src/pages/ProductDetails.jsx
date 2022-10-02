import React from "react";
import { useParams } from "react-router-dom";
import Details from "../components/ProdDetails/Details";
import { useShoppingCart } from "../context/Context";
import { useRead } from "../hooks";

const ProductDetails = () => {
	const { id: productId } = useParams();
	const { getItemQuantity } = useShoppingCart();

	const {
		isLoading,
		error,
		data: { id, attributes },
	} = useRead({
		url: `/api/products/${productId}?populate=user,image,reviews.user`,
	});

	const qty = getItemQuantity(id);
	return (
		<>
			{!isLoading && error && <h1>{error}</h1>}
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				!error && <Details id={id} qty={qty} attributes={attributes} />
			)}
		</>
	);
};

export default ProductDetails;
