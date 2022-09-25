import React from "react";
import FooterBottom from "../FooterBottom/FooterBottom";
import FooterTop from "../FooterTop/FooterTop";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
// import "../../App.css";

const Layout = ({ children }) => {
	return (
		<>
			<div>
				<Header />
				<Navbar />
			</div>
			<main>{children}</main>
			<div>
				<FooterTop />
				<FooterBottom />
			</div>
		</>
	);
};

export default Layout;
