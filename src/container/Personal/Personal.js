import React, { useState } from "react";
import person from "../../img/about.jpg";
import CardPerson from "../../component/CardPerson/CardPerson";

const Personal = () => {
	const userInfo = {
		id: "Partner0",
		name: "Nguyen Van B",
		age: "24",
		sex: 0,
		des:
			"Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for visual mockups",
		sex: 0,
		avatar: person,
		like: [],
	};
	const otherPartner = [
		{
			id: "Partner1",
			name: "Nguyen Van A",
			age: "35",
			des:
				"Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for visual mockups.",
			sex: 0,
			avatar: person,
			like: ["Partner0"],
		},
		{
			id: "Partner2",
			name: "Nguyen Van A",
			age: "35",
			des:
				"Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for visual mockups.",
			sex: 1,
			avatar: person,
			like: [],
		},
		{
			id: "Partner3",
			name: "Nguyen Van A",
			age: "35",
			des:
				"Lorem ipsum is placeholder text commonly used in the graphic, print and publishing industries for visual mockups.",
			sex: 0,
			avatar: person,
			like: [],
		},
	];
	const [user, setUser] = useState(userInfo);
	const [openModal, setOpenModal] = useState(false);
	const isPeopleLikeYou = (arr, id) => {
		const people = arr.find((item) => item.id === id);
		if (people.like.includes(user.id)) return true;
		else return false;
	};
	const handleLike = (id, isLike) => {
		if (isLike) {
			setUser({ ...user, like: [...user.like, id] });
		} else {
			setUser({ ...user, like: user.like.filter((item) => item !== id) });
		}
		const isLikeYou = isPeopleLikeYou(otherPartner, id);
		if (isLikeYou) {
			setOpenModal(true);
		}
	};
	console.log("use:", user);

	return (
		<div className='container'>
			<div id='' style={{ paddingTop: "110px" }} className='row wrapper'>
				<aside className='personal col-md-4'>
					<h5 className='text-center font-weight-bold'>Profile detail</h5>
					<img className='person mt-2' src={user.avatar} alt={user.name}></img>
					<p className='person_name pt-3'>{user.name}</p>
					<p className=''>{user.des}</p>
				</aside>
				<div className='partner col-md-8'>
					<h5 className='text-center font-weight-bold'>Lướt tìm bạn bè</h5>
					{otherPartner.map((item, index) => (
						<CardPerson person={item} handleLike={handleLike}></CardPerson>
					))}
				</div>
			</div>
		</div>
	);
};

export default Personal;
