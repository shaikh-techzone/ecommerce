import { Menu } from "antd";
import React, { useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthAndCartContext } from "../../context/Context";
// import "./Header.css";
import logo from "../../img/logo.png";

const Header = () => {
	const { cartQuantity, logout, user } = useAuthAndCartContext();
	const [query, setQuery] = useState("");
	const navigate = useNavigate();
	// console.log(navigate());
	const searchHandler = (e) => {
		e.preventDefault();
		navigate(`/search?q=${query}`);
	};
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
							<form className='search' onSubmit={searchHandler}>
								{/* <form onSubmit={searchHandler}> */}
								<input
									type={"search"}
									placeholder='Search'
									name={"query"}
									value={query}
									onChange={(e) => setQuery(e.target.value)}
								/>
								<button type='submit'>
									<i className='fa fa-search'></i>
								</button>
								{/* </form> */}
							</form>
						</div>
						<div className='col-md-3'>
							<div className='user'>
								{Object.keys(user || {})?.length > 0 ? (
									<div className='dropdown'>
										<Link
											to='#'
											className='dropdown-toggle'
											data-toggle='dropdown'>
											Hey, {user?.user.username}
										</Link>
										<div className='dropdown-menu'>
											{/* <Link to='#' className='dropdown-item'>
												Profile
											</Link> */}
											<Link to='/dashboard' className='dropdown-item'>
												Dashboard
											</Link>
											<Link
												to='#'
												className='dropdown-item'
												onClick={() => logout()}>
												Logout
											</Link>
										</div>
									</div>
								) : (
									<div className='dropdown'>
										<Link
											to='#'
											className='dropdown-toggle'
											data-toggle='dropdown'>
											My Account
										</Link>
										<div className='dropdown-menu'>
											<Link to='/auth/login' className='dropdown-item'>
												Login
											</Link>
											<Link to='/auth/signup' className='dropdown-item'>
												Register
											</Link>
										</div>
									</div>
								)}
								<div className='cart'>
									<NavLink to={"/cart"}>
										<i className='fa fa-cart-plus'></i>
										<span>({cartQuantity})</span>
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

export default Header;
