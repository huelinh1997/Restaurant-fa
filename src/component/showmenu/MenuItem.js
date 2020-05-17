import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

const MenuItem = ({ menu, onChecked }) => {
	const [checked, setChecked] = React.useState(menu.isChecked);

	const handleChange = (event) => {
		onChecked({ ...menu, isChecked: event.target.checked });
		setChecked(event.target.checked);
	};

	return (
		<div className='single_food_item media'>
			<img src={menu.img} className='mr-3' alt='...' />
			<div className='media-body align-self-center pr-2'>
				<h3>{menu.name}</h3>
				<p>{menu.des}</p>
				<span
					className='d-flex'
					style={{ alignItems: "center", justifyContent: "space-between" }}>
					<h5 style={{ margin: 0 }}>{menu.price}</h5>
					<span>
						<Checkbox
							checked={checked}
							onChange={handleChange}
							inputProps={{ "aria-label": "primary checkbox" }}
						/>
					</span>
				</span>
			</div>
		</div>
	);
};

export default MenuItem;
