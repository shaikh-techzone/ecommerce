import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../components/Products/Dropdown";
import Prodlist from "../components/Products/Prodlist";
import Searchbox from "../components/Products/searchbox";
import Sidebar from "../components/Products/Sidebar";
import { fetchProducts } from "../store/slices/products";

const Product = () => {
	const showTotal = (total) => `${total} Total Items: `;
	const [itemsPerPage, setItemsPerPage] = useState(10);
	const [currentPageNumber, setCurrentPageNumber] = useState(1);
	const { isLoading, products, error, meta } = useSelector(
		(state) => state.product
	);
	const dispatch = useDispatch();

	const onShowSizeChange = (current, pageSize) => {
		setItemsPerPage(pageSize);
	};
	const onPageChange = (page) => {
		setCurrentPageNumber(page);
	};
	useEffect(() => {
		dispatch(
			fetchProducts(
				`/api/products?populate=image&pagination[page]=${currentPageNumber}&pagination[pageSize]=${itemsPerPage}`
			)
		);
	}, [itemsPerPage, currentPageNumber]);
	return (
		<>
			<div class='product-view'>
				<div class='container'>
					<div class='row'>
						<div class='col-md-9'>
							<div class='row'>
								<div class='col-lg-12'>
									<div class='row'>
										<div class='col-md-8'>
											<Searchbox />
										</div>
										<div class='col-md-4'>
											<div class='product-short'>
												<DropDown />
											</div>
										</div>
									</div>
								</div>
								{!isLoading && error && <h4>{error}</h4>}
								{isLoading ? (
									<h3>Loading...</h3>
								) : (
									products?.length > 0 &&
									products.map((product) => {
										return (
											<Prodlist
												key={product.id}
												product={{ id: product.id, ...product.attributes }}
											/>
										);
									})
								)}
								{/* // <Prodlist /> */}
								<div class='col-lg-12'>
									<nav aria-label='Page navigation example'>
										<Pagination
											className='pagination justify-content-center'
											showSizeChanger
											onShowSizeChange={onShowSizeChange}
											total={meta?.total}
											showTotal={showTotal}
											showQuickJumper
											current={currentPageNumber}
											onChange={onPageChange}
											hideOnSinglePage={true}
											pageSizeOptions={["10", "50", "100", "200"]}
											responsive={true}
										/>
									</nav>
								</div>
							</div>
						</div>
						<Sidebar />
					</div>
				</div>
			</div>
		</>
	);
};

export default Product;
