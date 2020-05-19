import * as Types from "../Constant/Constant";
import * as ApiCall from "../Util/ApiCaller";

export const submitOrderRequest = (arr) => {
	return (dispatch) => {
		return ApiCall.SubmitOrder(arr).then((res) => {
			if (res.status === 200) {
				console.log("res.data:", res.data);
				alert("Success!");
			} else alert("Không thể kết nối dữ liệu!");
		});
	};
};

export const saveUserAction = (user) => {
	return (dispatch) => {
		return ApiCall.sendInfoUser(user).then((res) => {
			if (res.status === 200 || res.status === 201) {
				console.log("res.data:", res.data);
				dispatch({ type: Types.GET_INFO_USER_RESPONSE, data: user });
			} else alert("Không thể kết nối dữ liệu!");
		});
	};
};
