import { Dropdown, Menu, Space } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const DropDown = () => {
	const menu = (
		<Menu
			items={[
				{
					label: <NavLink to='#'>Newest</NavLink>,
					key: "0",
				},
				{
					label: <NavLink to='#'>Popular</NavLink>,
					key: "1",
				},
				// {
				//   type: "divider",
				// },
				// {
				//   label: "3rd menu item",
				//   key: "3",
				// },
			]}
		/>
	);

	return (
		<div>
			<Dropdown overlay={menu} trigger={["click"]}>
				<a onClick={(e) => e.preventDefault()}>
					<Space>
						<NavLink to='#' className='dropdown-toggle' data-toggle='dropdown'>
							Sort By
						</NavLink>
						{/* <DownOutlined /> */}
					</Space>
				</a>
			</Dropdown>
		</div>
	);
};

export default DropDown;
