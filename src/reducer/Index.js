import * as Types from "../Constant/Constant";

const stateDefault = {
	userInfo: {},
	isLoggedIn: false,
	menu: [],
};

function reducer(state = stateDefault, action) {
	switch (action.type) {
		case Types.GET_INFO_USER_RESPONSE: {
			console.log(action.data);

			return {
				...state,
				userInfo: action.data,
				isLoggedIn: true,
			};
		}
		case Types.GET_MENU_FOOD_RESPONSE: {
			return {
				...state,
				menu: action.data,
			};
		}
		case Types.CHOOSE_FOOD_RESPONSE: {
			return {
				...state,
				userInfo: action.data,
			};
		}
		default: {
			return state;
		}
	}
}

export default reducer;
