import React, { Fragment } from "react";
import "./App.css";
import Header from "./container/header/Header";
import Footer from "./container/footer/Footer";
import routes from "./Router";
import { Switch, Route, Router } from "react-router-dom";
import history from "./common/History";

function App() {
	const showContentMenus = (routes) => {
		var result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main}
					/>
				);
			});
		}
		return <Switch> {result} </Switch>;
	};
	return (
		<Router history={history}>
			<Fragment>
				<Header />
				{showContentMenus(routes)}
				<Footer />
			</Fragment>
		</Router>
	);
}

export default App;
