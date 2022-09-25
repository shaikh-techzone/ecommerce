import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Prodlist from "../components/Products/Prodlist";
import Sidebar from "../components/Products/Sidebar";
import { fetchProducts } from "../store/slices/products";

const Product = () => {
	const [totalHits, setTotalHits] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(9);
	const [currentPageNumber, setCurrentPageNumber] = useState(1);
	const onShowSizeChange = (current, pageSize) => {
		setItemsPerPage(pageSize);
	};
	const showTotal = (total) => `${total} Total Items: `;
	const dispatch = useDispatch();
	const { isLoading, error, products, meta } = useSelector(
		(state) => state.product
	);
	console.log({ isLoading, error, products });

	const onPageChange = (page) => {
		setCurrentPageNumber(page);
	};
	useEffect(() => {
		//   dispatch(fetchProducts(`http://localhost:1337/api/products?pagination[start]=0&pagination[limit]=100&populate=image`));
		dispatch(
			fetchProducts(
				`http://localhost:1337/api/products?pagination[start]=0&pagination[limit]=100`
			)
		);
	}, [currentPageNumber]);
	return (
		<>
			<div class='product-view'>
				<div class='container'>
					<div class='row'>
						<div class='col-md-9'>
							<Prodlist />
							<div class='col-lg-12'>
								<nav aria-label='Page navigation example'>
									<Pagination
										className='pagination justify-content-center'
										defaultCurrent={1}
										defaultPageSize={9}
										showSizeChanger
										onShowSizeChange={onShowSizeChange}
										total={totalHits}
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
						<Sidebar />
					</div>
				</div>
			</div>
		</>
	);
};

export default Product;
