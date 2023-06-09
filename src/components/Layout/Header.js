import React from "react";

import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>Faadu Food Online</h1>
				<HeaderCardButton onClickShowCart={props.onShowCart} />
			</header>
			<div className={classes["main-image"]}>
				<img src={mealsImg} alt="table full of delicious food" />
			</div>
		</React.Fragment>
	);
};

export default Header;
