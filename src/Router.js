import React from "react";
import Home from "./container/home/Home";
import Menu from "./container/menu/Menu";

const routes = [
	{
		path: "/",
		exact: true,
		main: ({ history }) => <Home history={history} />,
	},
	{
		path: "/menu",
		exact: false,
		main: ({ history }) => <Menu history={history} />,
	},
];

export default routes;
