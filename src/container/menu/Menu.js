import React, { Fragment, useState, useEffect } from "react";
import iconPlay from "../../img/icon/play.svg";
import TabControl from "../../component/tab/TabControl";
import ImgFood from "../../img/food_menu/single_food_4.png";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { submitOrderRequest, getMenuFoodRequest } from "../../action/Action";

const Menu = ({ SubmitOrder, getMenuFood, menu, user }) => {
	const [menus, setMenu] = useState(menu);
	const [menu1, setMenu1] = useState([]);
	const [menu2, setMenu2] = useState([]);
	const [menu3, setMenu3] = useState([]);
	const [menuChoosing, setMenuChoosing] = useState([]);

	const FilterMenu = (arr, name) => {
		return arr.filter((item) => item.type === name);
	};

	const handleOnChecked = (menu) => {
		if (menu.isChecked) setMenuChoosing([...menuChoosing, menu.id]);
		else setMenuChoosing(menuChoosing.filter((item) => item !== menu.id));

		const findIndex = menus.findIndex((item) => item.id === menu.id);
		menus[findIndex] = menu;

		setMenu(menus);
	};
	console.log("menu:", menu);
	console.log("menu1:", menu1);
	console.log("menu2:", menu2);

	useEffect(() => {
		getMenuFood();
	}, []);

	useEffect(() => {
		setMenu(menu);
	}, [menu]);

	useEffect(() => {
		setMenu1(FilterMenu(menus, "Appetizer"));
		setMenu2(FilterMenu(menus, "main dishes"));
		setMenu3(FilterMenu(menus, "Desserts"));
	}, [menuChoosing, menus]);

	const handleSubmit = () => {
		console.log("{ ...user, food: menuChoosing }:", {
			...user,
			food: menuChoosing,
		});

		SubmitOrder({ ...user, food: menuChoosing });
	};

	console.log("menu:", menu);
	console.log("user:", user);
	return (
		<Fragment>
			<section
				className='breadcrumb breadcrumb_bg'
				style={{ paddingTop: "110px" }}>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='breadcrumb_iner text-center'>
								<div className='breadcrumb_iner_item'>
									<h2>Food Menu</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='food_menu gray_bg'>
				<div className='container'>
					<div className='row justify-content-between'>
						<div className='col-lg-5'>
							<div className='section_tittle'>
								<p>Popular Menu</p>
								<h2>Delicious Food Menu</h2>
							</div>
						</div>

						<div className='col-lg-12'>
							<TabControl
								tab1='Món khai vị'
								tab2='Món chính'
								tab3='Tráng miệng'
								data1={menu1}
								data2={menu2}
								data3={menu3}
								tabDefault={0}
								onChecked={handleOnChecked}
							/>
							<Button
								onClick={handleSubmit}
								variant='contained'
								color='secondary'
								style={{ display: "block", marginLeft: "auto" }}>
								Submit
							</Button>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};
const mapStateToProps = (state) => {
	return {
		menu: state.menu,
		user: state.userInfo,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		SubmitOrder: (user) => dispatch(submitOrderRequest(user)),
		getMenuFood: () => dispatch(getMenuFoodRequest()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
