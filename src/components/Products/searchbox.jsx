import React from "react";

const Searchbox = () => {
	return (
		<>
			<div className='product-search'>
				<input type='email' value='Search' />
				<button>
					<i className='fa fa-search'></i>
				</button>
			</div>
		</>
	);
};

export default Searchbox;
