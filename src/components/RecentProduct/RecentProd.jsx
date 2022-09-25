import React from "react";
// import "./RecentProd.css";
import Pro2 from "../../img/product-2.png";
import Pro4 from "../../img/product-4.png";
import Pro6 from "../../img/product-6.png";
import Pro8 from "../../img/product-8.png";
import Pro9 from "../../img/product-9.png";

const RecentProd = () => {
	return (
		<>
			<div className='recent-product'>
				<div className='container'>
					<div className='section-header'>
						<h3>Recent Product</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							viverra at massa sit amet ultricies. Nullam consequat, mauris non
							interdum cursus
						</p>
					</div>
					<div className='row align-items-center product-slider product-slider-4'>
						<div className='col-lg-3'>
							<div className='product-item'>
								<div className='product-image'>
									<a href='product-detail.html'>
										<img src={Pro2} alt='Product Image' />
									</a>
									<div className='product-action'>
										<a href='#'>
											<i className='fa fa-cart-plus'></i>
										</a>
										<a href='#'>
											<i className='fa fa-heart'></i>
										</a>
										<a href='#'>
											<i className='fa fa-search'></i>
										</a>
									</div>
								</div>
								<div className='product-content'>
									<div className='title'>
										<a href='#'>Phasellus Gravida</a>
									</div>
									<div className='ratting'>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
									</div>
									<div className='price'>
										$22 <span>$25</span>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='product-item'>
								<div className='product-image'>
									<a href='product-detail.html'>
										<img src={Pro4} alt='Product Image' />
									</a>
									<div className='product-action'>
										<a href='#'>
											<i className='fa fa-cart-plus'></i>
										</a>
										<a href='#'>
											<i className='fa fa-heart'></i>
										</a>
										<a href='#'>
											<i className='fa fa-search'></i>
										</a>
									</div>
								</div>
								<div className='product-content'>
									<div className='title'>
										<a href='#'>Phasellus Gravida</a>
									</div>
									<div className='ratting'>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
									</div>
									<div className='price'>
										$22 <span>$25</span>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='product-item'>
								<div className='product-image'>
									<a href='product-detail.html'>
										<img src={Pro6} alt='Product Image' />
									</a>
									<div className='product-action'>
										<a href='#'>
											<i className='fa fa-cart-plus'></i>
										</a>
										<a href='#'>
											<i className='fa fa-heart'></i>
										</a>
										<a href='#'>
											<i className='fa fa-search'></i>
										</a>
									</div>
								</div>
								<div className='product-content'>
									<div className='title'>
										<a href='#'>Phasellus Gravida</a>
									</div>
									<div className='ratting'>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
									</div>
									<div className='price'>
										$22 <span>$25</span>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='product-item'>
								<div className='product-image'>
									<a href='product-detail.html'>
										<img src={Pro8} alt='Product Image' />
									</a>
									<div className='product-action'>
										<a href='#'>
											<i className='fa fa-cart-plus'></i>
										</a>
										<a href='#'>
											<i className='fa fa-heart'></i>
										</a>
										<a href='#'>
											<i className='fa fa-search'></i>
										</a>
									</div>
								</div>
								<div className='product-content'>
									<div className='title'>
										<a href='#'>Phasellus Gravida</a>
									</div>
									<div className='ratting'>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
									</div>
									<div className='price'>
										$22 <span>$25</span>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-3'>
							<div className='product-item'>
								<div className='product-image'>
									<a href='product-detail.html'>
										<img src={Pro9} alt='Product Image' />
									</a>
									<div className='product-action'>
										<a href='#'>
											<i className='fa fa-cart-plus'></i>
										</a>
										<a href='#'>
											<i className='fa fa-heart'></i>
										</a>
										<a href='#'>
											<i className='fa fa-search'></i>
										</a>
									</div>
								</div>
								<div className='product-content'>
									<div className='title'>
										<a href='#'>Phasellus Gravida</a>
									</div>
									<div className='ratting'>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
									</div>
									<div className='price'>
										$22 <span>$25</span>
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

export default RecentProd;
