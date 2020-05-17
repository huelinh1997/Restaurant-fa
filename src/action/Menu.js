import * as menuTypes from "../Constant/Menu";
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
