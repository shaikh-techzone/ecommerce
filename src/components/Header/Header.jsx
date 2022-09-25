import React from "react";
import { NavLink } from "react-router-dom";
// import "./Header.css";
import logo from "../../img/logo.png";

const header = () => {
	return (
		<>
			<div className='top-header'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-md-3'>
							<div className='logo'>
								<NavLink to=''>
									<img src={logo} alt='Logo' />
								</NavLink>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='search'>
								<input type='text' placeholder='Search' />
								<button>
									<i className='fa fa-search'></i>
								</button>
							</div>
						</div>
						<div className='col-md-3'>
							<div className='user'>
								<div className='dropdown'>
									<NavLink
										to='#'
										className='dropdown-toggle'
										data-toggle='dropdown'>
										My Account
									</NavLink>
									<div className='dropdown-menu'>
										<NavLink to='#' className='dropdown-item'>
											Login
										</NavLink>
										<NavLink to='#' className='dropdown-item'>
											Register
										</NavLink>
									</div>
								</div>
								<div className='cart'>
									<NavLink to={"/cart"}>
										<i className='fa fa-cart-plus'></i>
										<span>(0)</span>
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default header;
