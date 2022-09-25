import React from "react";
import Sidebar from "../Products/Sidebar";
// import RelatedProd from "./RelatedProd";
import SelectedProd from "./SelectedProd";

const Details = () => {
	return (
		<>
			<div class='product-detail'>
				<div class='container'>
					<div class='row'>
						<div class='col-lg-9'>
							{/* Slected Product  */}
							<SelectedProd />

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
