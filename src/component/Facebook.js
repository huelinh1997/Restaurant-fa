import React, { Fragment, useState, useEffect } from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";

const Facebook = ({ saveInfoUser, isLogIn }) => {
	const [isLoggedIn, setIsLoggin] = useState(false);
	const [userId, setUserId] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [picture, setPicture] = useState("");

	const componentClicked = () => {
		console.log("click");
	};

	const responseFacebook = (response) => {
		console.log("res:", response);
		if (response) {
			saveInfoUser(response);
		}
		setIsLoggin(true);
		setUserId(response.userId);
		setName(response.name);
		setEmail(response.email);
		setPicture(response.picture.data.url);
	};
	let fbContent;
	if (isLoggedIn) {
		fbContent = (
			<div
				style={{
					width: 400,
					margin: "auto",
					background: "#f4f4f4",
					padding: "20px",
				}}>
				<img src={picture} alt={name} />
				<h2>Welcome {name}</h2>
				Email: {email}
			</div>
		);
	} else {
		fbContent = (
			<FacebookLogin
				appId='559638961656761'
				autoLoad={false}
				fields='name,email,picture'
				onClick={componentClicked}
				callback={responseFacebook}
			/>
		);
	}
	return (
		<div style={{ display: "flex", alignItems: "center" }}>{fbContent}</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isLogIn: state.isLoggedIn,
	};
};

export default connect(mapStateToProps)(Facebook);
