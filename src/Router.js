import React from "react";
import Home from "./container/home/Home";
import Menu from "./container/menu/Menu";
import Login from "./container/login/Login";
import Personal from "./container/Personal/Personal";
import Booking from "./container/Booking/index";

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
	{
		path: "/personal",
		exact: false,
		main: ({ history }) => <Personal history={history} />,
	},
	{
		path: '/booking',
		exact: false,
		main: ({ history }) => <Booking history={history} />,
	}
];

export default routes;
