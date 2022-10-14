import React from "react";
import Category from "../components/Category/Category";
import Feature from "../components/Feature/Feature";
import Slider from "../components/Slider/Slider";
import RecentProd from "../components/RecentProduct/RecentProd";
import Brands from "../components/Brands/Brands";

const Home = () => {
	return (
		<>
			<Slider />
			<Feature />
			{/* <Category /> */}
			<RecentProd />
			{/* <Brands /> */}
		</>
	);
};

export default Home;
