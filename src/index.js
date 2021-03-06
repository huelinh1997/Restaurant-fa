import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import styles from "./styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer/Index";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";


const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
serviceWorker.unregister();
