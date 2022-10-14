import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthAndCartContext } from "../../context/Context";
import { error, success } from "../../utilities";

const Order = () => {
	let [orders, setOrders] = useState([]);
	const [_isLoading, _setIsLoading] = useState(false);
	const [errors, setErrors] = useState("");

	const { user } = useAuthAndCartContext();

	// Orders
	const getAllOrders = async () => {
		try {
			_setIsLoading(true);
			const { data } = await axios(
				`/api/orders?populate=user&filters[user]=${user?.user?.id}`
			);
			setOrders(data?.data);
			//   setTableParams({
			// 	...tableParams,
			// 	pagination: {
			// 	  ...tableParams.pagination,
			// 	  total: data?.meta?.pagination?.total,
			// 	},
			//   });
		} catch (error) {
			setErrors("Order Error", error.message);
		} finally {
			_setIsLoading(false);
		}
	};

	useEffect(() => {
		getAllOrders();
	}, [user?.user?.id, orders?.length]);

	// Logging

	console.log(orders);

	return (
		<>
			<tr>
				<td>1</td>
				<td>01 Jan 2020</td>
				<td>$22</td>
				<td>Approved</td>
			</tr>
		</>
	);
};

export default Order;
