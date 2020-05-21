import * as Types from "../Constant/Constant";
import * as ApiCall from "../Util/ApiCaller";
import history from "../common/History";

export const submitOrderRequest = (user) => {
	console.log("user:", user);

	return (dispatch) => {
		return ApiCall.SubmitOrder(user).then((res) => {
			if (res.status === 200 || res.status === 201) {
				dispatch({ type: Types.CHOOSE_FOOD_RESPONSE, data: res.data });
				alert("Chọn món thành công!");
			} else alert("Không thể kết nối dữ liệu!");
		});
	};
};

export const handleLogInAction = () => {
	return (dispatch) => {
		return ApiCall.getUserInfo().then((res) => {
			if (res.status === 200) {
				dispatch({ type: Types.GET_INFO_USER_RESPONSE, data: res.data });
				alert("Đăng nhập thành công!");
				history.push("/");
			} else alert("Không thể kết nối dữ liệu!");
		});
	};
};

export const getMenuFoodRequest = () => {
	return (dispatch) => {
		return ApiCall.getMenuFood().then((res) => {
			if (res.status === 200) {
				dispatch({ type: Types.GET_MENU_FOOD_RESPONSE, data: res.data });
			} else alert("Không thể kết nối dữ liệu!");
		});
	};
};
