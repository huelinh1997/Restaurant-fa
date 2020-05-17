import Box from "@material-ui/core/Box";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import ShowMenu from "../showmenu/ShowMenu";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const AntTabs = withStyles({
	root: {
		borderBottom: "1px solid #ddd",
	},
	indicator: {
		backgroundColor: "f17896",
		"&:hover": {
			backgroundColor: "#f26b38",
		},
	},
})(Tabs);
const breakpoints = createBreakpoints({});
const AntTab = withStyles((theme) => ({
	root: {
		outline: "none !important",
		fontSize: "18px",
		[breakpoints.down("xs")]: {
			fontSize: "13px",
			marginRight: "10px",
			paddingBottom: "0",
		},
		fontWeight: theme.typography.fontWeightNormal,
		marginRight: theme.spacing(4),
		fontFamily: [
			'"Cardo", serif',
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		"&:hover": {
			color: "#333333",
			opacity: 1,
		},
		indicator: {
			"&:hover": {
				backgroundColor: "#f26b38",
			},
		},
	},
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component='div'
			role='tabpanel'
			hidden={value !== index}
			id={`scrollable-prevent-tabpanel-${index}`}
			aria-labelledby={`scrollable-prevent-tab-${index}`}
			{...other}>
			{value === index && <Box>{children}</Box>}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	padding: {
		padding: theme.spacing(3),
	},
	demo1: {
		color: "#333333",
		backgroundColor: "transparent",
		paddingBottom: "20px",
	},
}));

function TabControl({ tab1, tab2, data1, data2, tabDefault, onChecked }) {
	const classes = useStyles();
	const [value, setValue] = React.useState(tabDefault);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div>
			<div className={classes.demo1}>
				<AntTabs value={value} onChange={handleChange} aria-label='ant example'>
					<AntTab label={tab1} />
					<AntTab label={tab2} />
				</AntTabs>
			</div>

			<TabPanel value={value} index={0}>
				<ShowMenu menus={data1} onChecked={onChecked} />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<ShowMenu menus={data2} onChecked={onChecked} />
			</TabPanel>
		</div>
	);
}

export default withRouter(TabControl);
