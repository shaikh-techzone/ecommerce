import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../../product";
import { useAuthAndCartContext } from "../../context/Context";
import { useRead } from "../../hooks/index";
import { IncreaseDecrease } from "../Button/IncreaseDecrease";
import {
	convertToUSD,
	imageUrlFormatter,
	placeholderImageUrl,
} from "../../utilities";
const SelectedProd = ({ id, qty, attributes }) => {
	return (
		<>
			<div className='row align-items-center product-detail-top'>
				<div className='col-md-5'>
					<div className='product-slider-single'>
						<img
							src={
								attributes?.image?.data
									? imageUrlFormatter(attributes?.image?.data?.attributes?.url)
									: placeholderImageUrl
							}
							alt={attributes?.title}
						/>
						{/* <img src={product2} alt='Product Image' />
						<img src={product3} alt='Product Image' /> */}
					</div>
				</div>
				<div className='col-md-7'>
					<div className='product-content'>
						<div className='title'>
							<h2>{attributes?.title}</h2>
						</div>
						<div className='ratting'>
							<i className='fa fa-star'></i>
							<i className='fa fa-star'></i>
							<i className='fa fa-star'></i>
							<i className='fa fa-star'></i>
							<i className='fa fa-star'></i>
						</div>
						<div className='price'>{convertToUSD(attributes?.price)}</div>
						<div className='details'>
							<p
								dangerouslySetInnerHTML={{
									__html: attributes?.description,
								}}></p>
						</div>

						<div className='quantity'>
							<h4>In stock: {attributes?.quantity} </h4>
							<br />
							<div className='qty'>
								<IncreaseDecrease
									id={id}
									qty={qty}
									quantity={attributes?.quantity}
								/>
							</div>
						</div>
						{/* <div className='action'>
							<a href='#'>
								<i className='fa fa-cart-plus'></i>
							</a>
							<a href='#'>
								<i className='fa fa-heart'></i>
							</a>
							<a href='#'>
								<i className='fa fa-search'></i>
							</a>
						</div> */}
					</div>
				</div>
			</div>

			<div className='row product-detail-bottom'>
				<div className='col-lg-12'>
					{/* <ul className='nav nav-pills nav-justified'>
						<li className='nav-item'>
							<a className='nav-link' data-toggle='pill' href='#reviews'>
								User Reviews
							</a>
						</li>
					</ul> */}

					<div className='tab-content'>
						<div id='reviews' className='container tab-pane active'>
							<br />
							<div className='reviews-submitted'>
								<div className='reviewer'>
									Phasellus Gravida - <span>01 Jan 2020</span>
								</div>
								<div className='ratting'>
									<i className='fa fa-star'></i>
									<i className='fa fa-star'></i>
									<i className='fa fa-star'></i>
									<i className='fa fa-star'></i>
									<i className='fa fa-star'></i>
								</div>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam.
								</p>
							</div>
							<div className='reviews-submit'>
								<h4>Give your Review:</h4>
								<div className='ratting'>
									<i className='fa fa-star-o'></i>
									<i className='fa fa-star-o'></i>
									<i className='fa fa-star-o'></i>
									<i className='fa fa-star-o'></i>
									<i className='fa fa-star-o'></i>
								</div>
								<div className='row form'>
									<div className='col-sm-6'>
										<input type='text' placeholder='Name' />
									</div>
									<div className='col-sm-6'>
										<input type='email' placeholder='Email' />
									</div>
									<div className='col-sm-12'>
										<textarea placeholder='Review'></textarea>
									</div>
									<div className='col-sm-12'>
										<button>Submit</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SelectedProd;
