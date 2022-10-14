import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/ProdDetails/Details";
import { useAuthAndCartContext } from "../context/Context";
import { useRead } from "../hooks";

const ProductDetails = () => {
	const { id: productId } = useParams();
	const { getItemQuantity } = useAuthAndCartContext();
	const [isLoading, setIsLoading] = useState(false);
	const [product, setProduct] = useState({});
	const { id, attributes } = product;
	const [error, setError] = useState("");
	const { user } = useAuthAndCartContext();

	const [rating, setRating] = useState(0);
	const [content, setContent] = useState("");
	const [reviews, setReviews] = useState([]);
	const [loading, setLoading] = useState(false);

	const getProductDetails = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios(`/api/products/${productId}?populate=image`);

			setProduct(data?.data);
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const getAllReviewsByProductId = async () => {
		try {
			setLoading(true);
			const { data } = await axios(
				`/api/reviews?filters[product][id]=${productId}&populate=user`
			);
			setReviews(data?.data);
		} catch (error) {
			message.error("Error while getting reviews!");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (productId) {
			getProductDetails();
			getAllReviewsByProductId();
		}
	}, [productId]);

	const reviewSubmitHandler = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			await axios(`/api/reviews`, {
				method: "POST",
				data: JSON.stringify({
					data: {
						content: content.trim(),
						rating,
						user: user?.user?.id,
						product: +productId,
					},
				}),
			});
			setContent("");
			setRating(0);
			getAllReviewsByProductId();
		} catch (error) {
			message.error("Error while posting review!");
		} finally {
			setLoading(false);
		}
	};

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
