import React, { Fragment } from "react";
import Facebook from "../../component/Facebook";
import login from "../../img/login.svg";
import { connect } from "react-redux";
import { saveUserAction, handleLogInAction } from "../../action/Action";

const Login = ({ saveInfoUser, isLogIn, handleLogIn }) => {
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
							isLogIn={isLogIn}
							handleLogIn={() => handleLogIn()}
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
		//saveInfoUser: (user) => dispatch(saveUserAction(user)),
		handleLogIn: () => dispatch(handleLogInAction()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
