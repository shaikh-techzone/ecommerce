import React from "react";
// import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div className='header'>
				<div className='container'>
					<nav className='navbar navbar-expand-md bg-dark navbar-dark'>
						<Link to={"/"} className='navbar-brand'>
							MENU
						</Link>
						<button
							type='button'
							className='navbar-toggler'
							data-toggle='collapse'
							data-target='#navbarCollapse'>
							<span className='navbar-toggler-icon'></span>
						</button>

						<div
							className='collapse navbar-collapse justify-content-between'
							id='navbarCollapse'>
							<div className='navbar-nav m-auto'>
								<Link to='/' className='nav-item nav-link '>
									Home
								</Link>
								<Link to='/products' className='nav-item nav-link'>
									Products
								</Link>
								{/* <div className='nav-item dropdown'>
									<a
										href='#'
										className='nav-link dropdown-toggle'
										data-toggle='dropdown'>
										Pages
									</a>
									<div className='dropdown-menu'>
										<a href='product-list.html' className='dropdown-item'>
											Product
										</a>
										<a href='product-detail.html' className='dropdown-item'>
											Product Detail
										</a>
										<a href='cart.html' className='dropdown-item'>
											Cart
										</a>
										<a href='wishlist.html' className='dropdown-item'>
											Wishlist
										</a>
										<a href='checkout.html' className='dropdown-item'>
											Checkout
										</a>
										<a href='login.html' className='dropdown-item'>
											Login & Register
										</a>
										<a href='my-account.html' className='dropdown-item'>
											My Account
										</a>
									</div>
								</div> */}
								<Link to='/contact' className='nav-item nav-link'>
									Contact Us
								</Link>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};

export default Navbar;
