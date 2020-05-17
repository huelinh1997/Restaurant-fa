import React from "react";
import MenuItem from "./MenuItem";

const ShowMenu = ({ menus, onChecked }) => {
	const showMenuContent = (menus = []) => {
		let dataMovies = menus.map((menu, index) => {
			return <MenuItem key={index} menu={menu} onChecked={onChecked} />;
		});
		return dataMovies;
	};

	let colMenu = Math.ceil(menus.length / 2);
	return (
		<div className='row'>
			<div className='col-sm-6 col-lg-6'>
				{showMenuContent(menus.slice(0, colMenu))}
			</div>
			<div className='col-sm-6 col-lg-6'>
				{showMenuContent(menus.slice(colMenu, menus.length))}
			</div>
		</div>
	);
};

export default ShowMenu;
