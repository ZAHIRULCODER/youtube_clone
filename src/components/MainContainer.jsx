import React from "react";
import ButtonList from "./ButtonList";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
	return (
		<div>
			<ButtonList />
			<Outlet />
		</div>
	);
};

export default MainContainer;
