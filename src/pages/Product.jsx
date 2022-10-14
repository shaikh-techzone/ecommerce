import { Pagination } from "antd";
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../components/Products/Dropdown";
import Prodlist from "../components/Products/Prodlist";
import Searchbox from "../components/Products/searchbox";
import Sidebar from "../components/Products/Sidebar";
import { fetchProducts } from "../store/slices/products";

const showTotal = (total) => `${total} Total Items: `;
const Product = () => {
	const { isLoading, products, error, meta } = useSelector(
		(state) => state.product
	);
	const [itemsPerPage, setItemsPerPage] = useState(10);
	const [currentPageNumber, setCurrentPageNumber] = useState(1);
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
				// `/api/products?filters[available]=true&populate=image&pagination[page]=${currentPageNumber}&pagination[pageSize]=${itemsPerPage}`
				`/api/products?populate=image&pagination[page]=${currentPageNumber}&pagination[pageSize]=${itemsPerPage}`
			)
		);
	}, [itemsPerPage, currentPageNumber]);
	return (
		<>
			<div className='product-view'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='row'>
								{/* <div className='col-lg-12'>
									<div className='row'>
										<div className='col-md-8'>
											<Searchbox />
										</div>
										<div className='col-md-4'>
											<div className='product-short'>
												<DropDown />
											</div>
										</div>
									</div>
								</div> */}
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
								<div className='col-lg-12'>
									<nav aria-label='Page navigation example'>
										<Pagination
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
											defaultCurrent={currentPageNumber}
										/>
									</nav>
								</div>
							</div>
						</div>
						{/* <Sidebar /> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default memo(Product);
