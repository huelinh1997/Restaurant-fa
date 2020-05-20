import React, { Fragment, useState } from "react";
import FacebookLogin from "react-facebook-login";

const Facebook = () => {
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
		setIsLoggin(true);
		setUserId(response.userId);
		setName(response.name);
		setEmail(response.email);
		setPicture(response.picture.data.url);
	};
	let fbContent;

	// FB.api('/me', function(response) {
	// 		console.log(JSON.stringify(response));
	// });

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

export default Facebook;
