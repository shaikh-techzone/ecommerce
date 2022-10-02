import React from "react";
import { useParams } from "react-router-dom";
import { useShoppingCart } from "../../context/Context";
import { useRead } from "../../hooks";
import Sidebar from "../Products/Sidebar";
// import RelatedProd from "./RelatedProd";
import SelectedProd from "./SelectedProd";

const Details = ({ id, qty, attributes }) => {
	return (
		<>
			<div className='product-detail'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-9'>
							{/* Slected Product  */}
							<SelectedProd id={id} qty={qty} attributes={attributes} />

							{/* Related Products */}
							{/* <RelatedProd /> */}
						</div>

						{/* Sidebar from Product Page Component */}
						<Sidebar />
					</div>
				</div>
			</div>
		</>
	);
};

export default Details;
