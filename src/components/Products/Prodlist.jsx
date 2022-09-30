import { Pagination } from "antd";
import React, { useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { useShoppingCart } from "../../context/Context";
import {
	convertToUSD,
	imageErrorHandler,
	imageUrlFormatter,
	placeholderImageUrl,
} from "../../utilities";

const Prodlist = ({
	product: { id, title, price, image, description, quantity },
}) => {
	const { getItemQuantity, increaseCartQuantity } = useShoppingCart();

	const qty = getItemQuantity(id);

	// const [product, setProduct] = useState(Products);
	// const navigate = useNavigate();
	// const { id } = useParams();
	return (
		<>
			<div
				class='col-lg-4'
				// key={index}
				// onClick={() => {
				// 	if (!id) {
				// 		navigate(`/products/${prod?.id}`);
				// 		console.log("click", id);
				// 	}
				// }}
			>
				<div class='product-item'>
					<div class='product-image'>
						<Link to={`/product/${id}`}>
							<img
								src={
									image?.data
										? imageUrlFormatter(image?.data?.attributes?.url)
										: placeholderImageUrl
								}
								alt={title}
							/>
						</Link>
						<div class='product-action'>
							<NavLink to='#'>
								{qty === 0 ? <i class='fa fa-cart-plus'></i> : null}
							</NavLink>
							{/* <NavLink to='#'>
								<i class='fa fa-heart'></i>
							</NavLink>
							<NavLink to='#'>
								<i class='fa fa-search'></i>
							</NavLink> */}
						</div>
					</div>
					<div class='product-content'>
						<div class='title'>
							{/* <NavLink to='#'>{prod.name}</NavLink> */}
							{title}
						</div>
						<div class='ratting'>
							<i class='fa fa-star'></i>
							<i class='fa fa-star'></i>
							<i class='fa fa-star'></i>
							<i class='fa fa-star'></i>
							<i class='fa fa-star'></i>
						</div>
						<div class='price'>{convertToUSD(price)}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Prodlist;
