import React, { Fragment } from "react";
import Facebook from "../../component/Facebook";
import login from "../../img/login.svg";

const Login = () => {
	return (
		<div style={{ height: "90vh" }}>
			<div className='container mt-5'>
				<div className='d-flex align-content-center justify-content-center'>
					<span className='col-md-6'>
						<img src={login} alt='login' />
					</span>

					<Facebook style={{ display: "flex", alignItems: "center" }} />
				</div>
			</div>
		</div>
	);
};

export default Login;
