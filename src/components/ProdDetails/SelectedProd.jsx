import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../../product";

const SelectedProd = () => {
	const { id } = useParams();
	const [selectedProd, setSelectedProd] = useState(Products[id - 1]);
	console.log(id);
	console.log(selectedProd);
	return (
		<>
			<div class='row align-items-center product-detail-top'>
				<div class='col-md-5'>
					<div class='product-slider-single'>
						<img src={selectedProd.image} alt='Product Image' />
						{/* <img src={product2} alt='Product Image' />
						<img src={product3} alt='Product Image' /> */}
					</div>
				</div>
				<div class='col-md-7'>
					<div class='product-content'>
						<div class='title'>
							<h2>{selectedProd.name}</h2>
						</div>
						<div class='ratting'>
							<i class='fa fa-star'></i>
							<i class='fa fa-star'></i>
							<i class='fa fa-star'></i>
							<i class='fa fa-star'></i>
							<i class='fa fa-star'></i>
						</div>
						<div class='price'>
							${selectedProd.disPrice} <span>${selectedProd.price}</span>
						</div>
						<div class='details'>
							<p>{selectedProd.desc}</p>
						</div>

						<div class='quantity'>
							<h4>Quantity:</h4>
							<div class='qty'>
								<button class='btn-minus'>
									<i class='fa fa-minus'></i>
								</button>
								<input type='text' value='1' />
								<button class='btn-plus'>
									<i class='fa fa-plus'></i>
								</button>
							</div>
						</div>
						<div class='action'>
							<a href='#'>
								<i class='fa fa-cart-plus'></i>
							</a>
							<a href='#'>
								<i class='fa fa-heart'></i>
							</a>
							<a href='#'>
								<i class='fa fa-search'></i>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class='row product-detail-bottom'>
				<div class='col-lg-12'>
					{/* <ul class='nav nav-pills nav-justified'>
						<li class='nav-item'>
							<a class='nav-link' data-toggle='pill' href='#reviews'>
								User Reviews
							</a>
						</li>
					</ul> */}

					<div class='tab-content'>
						<div id='reviews' class='container tab-pane active'>
							<br />
							<div class='reviews-submitted'>
								<div class='reviewer'>
									Phasellus Gravida - <span>01 Jan 2020</span>
								</div>
								<div class='ratting'>
									<i class='fa fa-star'></i>
									<i class='fa fa-star'></i>
									<i class='fa fa-star'></i>
									<i class='fa fa-star'></i>
									<i class='fa fa-star'></i>
								</div>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam.
								</p>
							</div>
							<div class='reviews-submit'>
								<h4>Give your Review:</h4>
								<div class='ratting'>
									<i class='fa fa-star-o'></i>
									<i class='fa fa-star-o'></i>
									<i class='fa fa-star-o'></i>
									<i class='fa fa-star-o'></i>
									<i class='fa fa-star-o'></i>
								</div>
								<div class='row form'>
									<div class='col-sm-6'>
										<input type='text' placeholder='Name' />
									</div>
									<div class='col-sm-6'>
										<input type='email' placeholder='Email' />
									</div>
									<div class='col-sm-12'>
										<textarea placeholder='Review'></textarea>
									</div>
									<div class='col-sm-12'>
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
