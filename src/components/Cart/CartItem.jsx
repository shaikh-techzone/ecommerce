// import React from 'react'

const CartItem = () => {
	return (
		<>
			<tr>
				<td>
					<a href='#'>
						<img src='img/product-1.png' alt='Image' />
					</a>
				</td>
				<td>
					<a href='#'>Product Name</a>
				</td>
				<td>$22</td>
				<td>
					<div className='qty'>
						<button className='btn-minus'>
							<i className='fa fa-minus'></i>
						</button>
						<input type='text' value='1' />
						<button className='btn-plus'>
							<i className='fa fa-plus'></i>
						</button>
					</div>
				</td>
				<td>$22</td>
				<td>
					<button>
						<i className='fa fa-trash'></i>
					</button>
				</td>
			</tr>
		</>
	);
};

export default CartItem;
