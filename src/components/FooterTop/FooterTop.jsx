import React from "react";
import { Link } from "react-router-dom";
const FooterTop = () => {
	return (
		<>
			<div className='footer'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-lg-3 col-md-6'>
							<div className='footer-widget'>
								<h1>E Shop</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Suspendisse sollicitudin rutrum massa. Suspendisse
									sollicitudin rutrum massa. Vestibulum porttitor, metus sed
									pretium elementum, nisi nibh sodales quam, non lobortis neque
									felis id mauris.
								</p>
							</div>
						</div>

						<div className='col-lg-3 col-md-6'>
							<div className='footer-widget'>
								<h3 className='title'>Useful Pages</h3>
								<ul>
									<li>
										<Link to={"/"}>Home</Link>
									</li>
									<li>
										<Link to={"/products"}>Product</Link>
									</li>
									<li>
										<Link to={"/contact"}>Contact Us</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className='col-lg-3 col-md-6'>
							<div className='footer-widget'>
								<h3 className='title'>Quick Links</h3>
								<ul>
									<li>
										<Link to={"/cart"}>Cart</Link>
									</li>
									<li>
										<Link to={"/wishlist"}>Wishlist</Link>
									</li>
									<li>
										<Link to={"/login"}>Login</Link>
									</li>
									{/* <li>
										<Link to={"/signup"}>Signup</Link>
									</li> */}
								</ul>
							</div>
						</div>

						<div className='col-lg-3 col-md-6'>
							<div className='footer-widget'>
								<h3 className='title'>Get in Touch</h3>
								<div className='contact-info'>
									<p>
										<i className='fa fa-map-marker'></i>123 E Shop, Los Angeles,
										CA, USA
									</p>
									<p>
										<i className='fa fa-envelope'></i>email@example.com
									</p>
									<p>
										<i className='fa fa-phone'></i>+123-456-7890
									</p>
									<div className='social'>
										<a href='#'>
											<i className='fa fa-twitter'></i>
										</a>
										<a href='#'>
											<i className='fa fa-facebook'></i>
										</a>
										<a href='#'>
											<i className='fa fa-linkedin'></i>
										</a>
										<a href='#'>
											<i className='fa fa-instagram'></i>
										</a>
										<a href='#'>
											<i className='fa fa-youtube'></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <div className='row payment'>
						<div className='col-md-6'>
							<div className='payment-method'>
								<p>We Accept:</p>
								<img src={paymentMethod} alt='Payment Method' />
							</div>
						</div>
						<div className='col-md-6'>
							<div className='payment-security'>
								<p>Secured By:</p>
								<img src={goDaddy} alt='Payment Security' />
								<img src={Norton} alt='Payment Security' />
								<img src={SSl} alt='Payment Security' />
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</>
	);
};

export default FooterTop;
