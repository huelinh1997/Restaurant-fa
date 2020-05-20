import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 500,
		marginTop: 20,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

export default function People({ person, handleLike }) {
	const classes = useStyles();
	const [isLike, setIsLike] = React.useState(false);

	const handleLikePerson = (id) => {
		setIsLike(!isLike);
		handleLike(id, !isLike);
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label='recipe' className={classes.avatar}>
						R
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title='Shrimp and Chorizo Paella'
				subheader='September 14, 2016'
			/>
			<CardMedia
				className={classes.media}
				image={person.avatar}
				title='Paella dish'
			/>
			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
					{person.des}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton
					aria-label='add to favorites'
					onClick={() => handleLikePerson(person.id)}>
					<FavoriteIcon color={isLike ? "secondary" : ""} />
				</IconButton>
				<IconButton aria-label='share'>
					<ShareIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}
