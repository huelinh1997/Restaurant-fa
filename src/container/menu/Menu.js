import React, { Fragment, useState, useEffect } from "react";
import iconPlay from "../../img/icon/play.svg";
import TabControl from "../../component/tab/TabControl";
import ImgFood from "../../img/food_menu/single_food_4.png";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { submitOrderRequest } from "../../action/Action";

const Menu = ({ SubmitOrder }) => {
	let menu = [
		{
			id: 1,
			img: ImgFood,
			name: "Easter Delight",
			des: "They're wherein heaven seed hath nothing",
			price: "$40.00",
			isChecked: false,
			type: "menu1",
		},
		{
			id: 2,
			img: ImgFood,
			name: "Easter Delight",
			des: "They're wherein heaven seed hath nothing",
			price: "$40.00",
			isChecked: false,
			type: "menu1",
		},
		{
			id: 3,
			img: ImgFood,
			name: "Easter Delight",
			des: "They're wherein heaven seed hath nothing",
			price: "$40.00",
			isChecked: false,
			type: "menu1",
		},
		{
			id: 4,
			img: ImgFood,
			name: "Easter Delight",
			des: "They're wherein heaven seed hath nothing",
			price: "$40.00",
			isChecked: false,
			type: "menu1",
		},
		{
			id: 5,
			img: ImgFood,
			name: "Easter Delight",
			des: "They're wherein heaven seed hath nothing",
			price: "$40.00",
			isChecked: false,
			type: "menu1",
		},
		{
			id: 6,
			img: ImgFood,
			name: "Easter Delight",
			des: "They're wherein heaven seed hath nothing",
			price: "$40.00",
			isChecked: false,
			type: "menu1",
		},
		{
			id: 7,
			img: ImgFood,
			name: "Easter Delight",
			des: "They're wherein heaven seed hath nothing",
			price: "$50.00",
			isChecked: false,
			type: "menu2",
		},
		{
			id: 8,
			img: ImgFood,
			name: "Easter Delight",
			des: "They're wherein heaven seed hath nothing",
			price: "$50.00",
			isChecked: false,
			type: "menu2",
		},
		{
			id: 9,
			img: ImgFood,
			name: "Easter Delight",
			des: "They're wherein heaven seed hath nothing",
			price: "$50.00",
			isChecked: false,
			type: "menu2",
		},
		{
			id: 10,
			img: ImgFood,
			name: "Easter Delight",
			des: "They're wherein heaven seed hath nothing",
			price: "$50.00",
			isChecked: false,
			type: "menu2",
		},
		{
			id: 11,
			img: ImgFood,
			name: "Easter Delight",
			des: "They're wherein heaven seed hath nothing",
			price: "$50.00",
			isChecked: false,
			type: "menu2",
		},
		{
			id: 12,
			img: ImgFood,
			name: "Easter Delight",
			des: "They're wherein heaven seed hath nothing",
			price: "$50.00",
			isChecked: false,
			type: "menu2",
		},
	];
	const [menus, setMenu] = useState(menu);
	const [menu1, setMenu1] = useState([]);
	const [menu2, setMenu2] = useState([]);
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

	useEffect(() => {
		setMenu1(FilterMenu(menus, "menu1"));
		setMenu2(FilterMenu(menus, "menu2"));
	}, [menuChoosing]);

	const handleSubmit = () => {
		SubmitOrder(menuChoosing);
	};
	return (
		<Fragment>
			<section className='breadcrumb breadcrumb_bg'>
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
								tab1='menu1'
								tab2='menu2'
								data1={menu1}
								data2={menu2}
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
		//arr: state.bill.respone,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		SubmitOrder: (arr) => dispatch(submitOrderRequest(arr)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
