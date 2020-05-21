import AxiosService from "../Util/Request";

export const SubmitOrder = (user) => {
	return AxiosService.post(`userInfo/`, user);
};

export const sendInfoUser = (user) => {
	return AxiosService.post();
};

export const getUserInfo = () => {
	return AxiosService.get("userInfo");
};

export const getMenuFood = () => {
	return AxiosService.get("menu");
};

export const getOtherPartner = () => {
	return AxiosService.get("otherPartner");
};
