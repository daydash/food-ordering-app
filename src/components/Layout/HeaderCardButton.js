import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCardButton = (props) => {
	const cartCtx = useContext(CartContext);

	// const numberOfCartItems = cartCtx.items.amount.length;
	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		console.log(curNumber);
		return curNumber + item.amount;
	}, 0);

	return (
		<button className={classes.button} onClick={props.onClickShowCart}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCardButton;
