import React from "react";
import Header from "./components/Header";
import store from "./reduxtoolkit/store/store";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

const App = () => {
	return (
		<Provider store={store}>
			<Header />
			<Outlet />
		</Provider>
	);
};

export default App;
