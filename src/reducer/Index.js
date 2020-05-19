import * as Types from "../Constant/Constant";

const stateDefault = {
	userInfo: {},
	isLoggedIn: false,
};

function reducer(state = stateDefault, action) {
	switch (action.type) {
		case Types.GET_INFO_USER_RESPONSE: {
			console.log("action.data:", action.data);

			return {
				...state,
				userInfo: action.data,
				isLoggedIn: true,
			};
		}
		default: {
			return state;
		}
	}
}

export default reducer;
