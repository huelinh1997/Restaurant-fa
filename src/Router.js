import React from "react";
import Home from "./container/home/Home";
import Menu from "./container/menu/Menu";
import Login from "./container/login/Login";

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
	{
		path: "/login",
		exact: false,
		main: ({ history }) => <Login history={history} />,
	},
];

export default routes;
