import React from "react";
// import "./Category.css";
import firstimg from "../../img/category-1.jpg";
import secimg from "../../img/category-2.jpg";
import thirdimg from "../../img/category-3.jpg";
import fourthimg from "../../img/category-4.jpg";

const Category = () => {
	return (
		<>
			<div className='category'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-md-4'>
							<div className='category-img'>
								<img src={firstimg} alt='' />
								<a className='category-name' href=''>
									<h2>Category Name</h2>
								</a>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='category-img'>
								<img src={secimg} alt='' />
								<a className='category-name' href=''>
									<h2>Category Name</h2>
								</a>
							</div>
							<div className='category-img'>
								<img src={thirdimg} alt='' />
								<a className='category-name' href=''>
									<h2>Category Name</h2>
								</a>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='category-img'>
								<img src={fourthimg} alt='' />
								<a className='category-name' href=''>
									<h2>Category Name</h2>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Category;
