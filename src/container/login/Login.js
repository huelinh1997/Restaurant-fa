import React, { Fragment } from "react";
import Facebook from "../../component/Facebook";
import login from "../../img/login.svg";
import { connect } from "react-redux";
import { saveUserAction } from "../../action/Action";

const Login = ({ saveInfoUser, isLogIn }) => {
	return (
		<Fragment>
			<div
				style={{ height: "90vh", paddingTop: "110px", marginBottom: "100px" }}>
				<div className='container mt-5'>
					<div className='d-flex align-content-center justify-content-center'>
						<span className='col-md-6'>
							<img src={login} alt='login' />
						</span>

						<Facebook
							style={{ display: "flex", alignItems: "center" }}
							saveInfoUser={(res) => saveInfoUser(res)}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		isLogIn: state.isLoggedIn,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		saveInfoUser: (user) => dispatch(saveUserAction(user)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
