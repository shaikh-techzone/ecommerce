import { Pagination } from "antd";
import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Products } from "../../product";
import DropDown from "./Dropdown";
import Searchbox from "./searchbox";

const Prodlist = () => {
	const [product, setProduct] = useState(Products);
	const navigate = useNavigate();
	const { id } = useParams();
	return (
		<>
			<div class='row'>
				<div class='col-lg-12'>
					<div class='row'>
						<div class='col-md-8'>
							<Searchbox />
						</div>
						<div class='col-md-4'>
							<div class='product-short'>
								<DropDown />
							</div>
						</div>
					</div>
				</div>
				{product?.length > 0 &&
					product?.map((prod, index) => {
						return (
							<div
								class='col-lg-4'
								key={index}
								onClick={() => {
									if (!id) {
										navigate(`/products/${prod?.id}`);
										console.log("click", id);
									}
								}}>
								<div class='product-item'>
									<div class='product-image'>
										<NavLink to={`/product/${prod.id}`}>
											<img src={prod.image} alt='Product' />
										</NavLink>
										<div class='product-action'>
											<NavLink to='#'>
												<i class='fa fa-cart-plus'></i>
											</NavLink>
											<NavLink to='#'>
												<i class='fa fa-heart'></i>
											</NavLink>
											<NavLink to='#'>
												<i class='fa fa-search'></i>
											</NavLink>
										</div>
									</div>
									<div class='product-content'>
										<div class='title'>
											<NavLink to='#'>{prod.name}</NavLink>
										</div>
										<div class='ratting'>
											<i class='fa fa-star'></i>
											<i class='fa fa-star'></i>
											<i class='fa fa-star'></i>
											<i class='fa fa-star'></i>
											<i class='fa fa-star'></i>
										</div>
										<div class='price'>
											${prod.disPrice} <span>${prod.price}</span>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default Prodlist;
