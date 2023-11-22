import React from "react";
import SiderBar from "./SiderBar";
import { Outlet } from "react-router-dom";

const Body = () => {
	return (
		<div className="flex">
			<SiderBar />
			<Outlet />
		</div>
	);
};

export default Body;
