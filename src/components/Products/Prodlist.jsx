import { Pagination, Rate } from "antd";
import React, { useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { useAuthAndCartContext } from "../../context/Context";
import {
	convertToUSD,
	imageErrorHandler,
	imageUrlFormatter,
	placeholderImageUrl,
} from "../../utilities";
import { IncreaseDecrease } from "../Button/IncreaseDecrease";

const Prodlist = ({
	product: { id, title, price, image, description, quantity },
}) => {
	const { getItemQuantity, increaseCartQuantity } = useAuthAndCartContext();

	const qty = getItemQuantity(id);

	// const [product, setProduct] = useState(Products);
	// const navigate = useNavigate();
	// const { id } = useParams();
	return (
		<>
			<div className='col-lg-3'>
				<div className='product-item'>
					<div className='product-image'>
						<Link to={`/products/${id}`}>
							<img
								src={
									image?.data
										? imageUrlFormatter(image?.data?.attributes?.url)
										: placeholderImageUrl
								}
								alt={title}
							/>
						</Link>
						<div className='product-action'>
							{quantity === 0 ? (
								<span>
									<i className='fa fa-ban'></i>
								</span>
							) : qty === 0 ? (
								<span onClick={() => increaseCartQuantity(id)}>
									<i className='fa fa-cart-plus'></i>
								</span>
							) : (
								<span>
									<i className='fa fa-ban'></i>
								</span>
							)}
							{/* {quantity || qty === 0 ? (
								<span onClick={() => increaseCartQuantity(id)}>
									<i className='fa fa-cart-plus'></i>
								</span>
							) : (
								<span>
									<i className='fa fa-ban'></i>
								</span>
							)} */}
							{/* <NavLink to='#'>
								<i className='fa fa-heart'></i>
							</NavLink>
							<NavLink to='#'>
								<i className='fa fa-search'></i>
							</NavLink> */}
						</div>
					</div>
					<div className='product-content'>
						<div className='title'>
							{/* <NavLink to='#'>{prod.name}</NavLink> */}
							{title}
						</div>
						<div className='ratting'>
							<i className='fa fa-star'></i>
							<i className='fa fa-star'></i>
							<i className='fa fa-star'></i>
							<i className='fa fa-star'></i>
							<i className='fa fa-star'></i>
							{/* <Rate
								tooltips={description}
								className='text-indigo-600 pt-4'
								allowHalf
								disabled
								defaultValue={attributes?.averageRating}
							/> */}
						</div>
						<div className='price'>{convertToUSD(price)}</div>
						{quantity === 0 ? (
							<div>
								<p style={{ color: "red" }}>out of stock</p>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</>
	);
};

export default Prodlist;
