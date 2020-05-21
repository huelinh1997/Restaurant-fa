import React, { useState } from "react";

const Facebook = ({ handleLogIn, isLogIn }) => {
	//const [isLoggedIn, setIsLoggin] = useState(false);
	const [userId, setUserId] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [picture, setPicture] = useState("");

	let fbContent;

	if (isLogIn) {
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
			<div onClick={handleLogIn} className='btn-FB'>
				Log in with Facebook
			</div>
		);
	}
	return (
		<div className='wrapBtn' style={{ display: "flex", alignItems: "center" }}>
			{fbContent}
		</div>
	);
};

export default Facebook;
