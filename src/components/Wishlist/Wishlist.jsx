import React from "react";
// import "./Wishlist.css"

import img1 from "../../img/product-4.png";
import img2 from "../../img/product-5.png";
import img3 from "../../img/product-3.png";

const Wishlist = () => {
	return (
		<div>
			<div className='cart-page'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='table-responsive'>
								<table className='table table-bordered'>
									<thead className='thead-dark'>
										<tr>
											<th>Image</th>
											<th>Name</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Add to Cart</th>
											<th>Remove</th>
										</tr>
									</thead>
									<tbody className='align-middle'>
										<tr>
											<td>
												<a href='#'>
													<img src={img1} alt='Image' />
												</a>
											</td>
											<td>
												<a href='#'>Product Name</a>
											</td>
											<td>$22</td>
											<td>
												<div className='qty'>
													<button className='btn-minus'>
														<i className='fa fa-minus' />
													</button>
													<input type='text' defaultValue={1} />
													<button className='btn-plus'>
														<i className='fa fa-plus' />
													</button>
												</div>
											</td>
											<td>
												<button>Add to Cart</button>
											</td>
											<td>
												<button>
													<i className='fa fa-trash' />
												</button>
											</td>
										</tr>
										<tr>
											<td>
												<a href='#'>
													<img src={img2} alt='Image' />
												</a>
											</td>
											<td>
												<a href='#'>Product Name</a>
											</td>
											<td>$22</td>
											<td>
												<div className='qty'>
													<button className='btn-minus'>
														<i className='fa fa-minus' />
													</button>
													<input type='text' defaultValue={1} />
													<button className='btn-plus'>
														<i className='fa fa-plus' />
													</button>
												</div>
											</td>
											<td>
												<button>Add to Cart</button>
											</td>
											<td>
												<button>
													<i className='fa fa-trash' />
												</button>
											</td>
										</tr>
										<tr>
											<td>
												<a href='#'>
													<img src={img3} alt='Image' />
												</a>
											</td>
											<td>
												<a href='#'>Product Name</a>
											</td>
											<td>$22</td>
											<td>
												<div className='qty'>
													<button className='btn-minus'>
														<i className='fa fa-minus' />
													</button>
													<input type='text' defaultValue={1} />
													<button className='btn-plus'>
														<i className='fa fa-plus' />
													</button>
												</div>
											</td>
											<td>
												<button>Add to Cart</button>
											</td>
											<td>
												<button>
													<i className='fa fa-trash' />
												</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Wishlist;
