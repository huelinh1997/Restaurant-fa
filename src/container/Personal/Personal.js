import React, { useState, useEffect } from "react";
import person from "../../img/about.jpg";
import CardPerson from "../../component/CardPerson/CardPerson";
import { connect } from "react-redux";
import male from "../../img/m.png";
import female from "../../img/female.svg";
import ClearIcon from "@material-ui/icons/Clear";
//import Carousel from "react-material-ui-carousel";
import Carousel from "react-bootstrap/Carousel";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { getOtherPartnerRequest } from "../../action/Action";

const Personal = ({ userInfo, getOtherPartner, other }) => {
	const [user, setUser] = useState(userInfo);
	const [otherPartner, setOtherPartner] = useState(other);
	const [open, setOpen] = React.useState(false);
	const [isNext, setIsNext] = useState(false);

	useEffect(() => {
		getOtherPartner();
	}, []);

	useEffect(() => {
		setUser(userInfo);
		setOtherPartner(other);
	}, [userInfo, other]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const isPeopleLikeYou = (arr, id) => {
		const people = arr.find((item) => item.id === id);
		if (people.like.includes(user.id)) return true;
		else return false;
	};
	const handleLike = (id, isLike) => {
		console.log("user:", user);

		const likeArr = user.like.push(id);
		if (isLike) {
			setUser({ ...user, like: likeArr });
		} else {
			setUser({ ...user, like: user.like.filter((item) => item !== id) });
		}
		const isLikeYou = isPeopleLikeYou(otherPartner, id);
		if (isLikeYou) {
			handleClickOpen();
		}
	};

	const handleUnLikePerson = () => {
		setIsNext(!isNext);
	};

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
							alt=''
							src={user.sex === 0 ? male : female}
							style={{ paddingRight: "5px", width: "22px" }}
						/>
						{user.name}
					</p>
					<p className=''>{user.des}</p>
				</aside>
				<div className='partner col-md-8'>
					<h5 className='text-center font-weight-bold'>Lướt tìm bạn bè</h5>
					<Carousel
						keyBoardControl={true}
						customTransition='all .5'
						removeArrowOnDeviceType={["tablet", "mobile"]}
						autoPlay={false}
						navButtonsAlwaysVisible={true}
						indicators={false}>
						{otherPartner.map((item, index) => (
							<Carousel.Item>
								<CardPerson
									person={item}
									handleLike={handleLike}
									handleUnLikePerson={handleUnLikePerson}></CardPerson>
							</Carousel.Item>
						))}
					</Carousel>
					<Dialog
						open={open}
						onClose={handleClose}
						aria-labelledby='alert-dialog-title'
						aria-describedby='alert-dialog-description'>
						<DialogTitle id='alert-dialog-title'>
							{"Use Google's location service?"}
						</DialogTitle>
						<DialogContent>
							<DialogContentText id='alert-dialog-description'>
								Let Google help apps determine location. This means sending
								anonymous location data to Google, even when no apps are
								running.
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose} color='primary' autoFocus>
								Agree
							</Button>
						</DialogActions>
					</Dialog>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		userInfo: state.userInfo,
		other: state.otherPeople,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getOtherPartner: () => dispatch(getOtherPartnerRequest()),
		//SubmitOrder: (arr) => dispatch(submitOrderRequest(arr)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
