import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthAndCartContext } from "../../context/Context";

const ProtectedRoute = () => {
	const { user } = useAuthAndCartContext();

	return Object.keys(user || {}).length > 0 ? (
		<Outlet />
	) : (
		<Navigate to='/auth/login' />
	);
};

export default ProtectedRoute;

// export const ProtectedRoutes = () => {
//     const { user } = useAuthAndCartContext();

//     return Object.keys(user || {}).length > 0 ? (
//       <Outlet />
//     ) : (
//       <Navigate to='/auth/login' />
//     );
//   };
