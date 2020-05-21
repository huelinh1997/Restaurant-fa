import React, { useState, useEffect } from "react";
import person from "../../img/about.jpg";
import CardPerson from "../../component/CardPerson/CardPerson";
import { connect } from "react-redux";
import male from "../../img/m.png";
import female from "../../img/female.svg";

const Personal = ({ userInfo }) => {
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

	useEffect(() => {
		setUser(userInfo);
	}, [userInfo]);
	console.log("user.avatar", user);

	return (
		<div className='container'>
			<div id='' style={{ paddingTop: "110px" }} className='row wrapper'>
				<aside className='personal col-md-4'>
					<h5 className='text-center font-weight-bold'>Profile detail</h5>
					<img
						className='person mt-2'
						src={`${user.avatar}`}
						alt={user.name}></img>
					<p className='person_name pt-3'>
						<img
							src={user.sex === 0 ? male : female}
							style={{ paddingRight: "5px", width: "22px" }}
						/>
						{user.name}
					</p>
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

const mapStateToProps = (state) => {
	return {
		userInfo: state.userInfo,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		//SubmitOrder: (arr) => dispatch(submitOrderRequest(arr)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
