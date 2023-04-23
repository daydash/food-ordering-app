import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCardButton = (props) => {
	const cartCtx = useContext(CartContext);

	const numberOfCardItems = cartCtx.items.length;

	return (
		<button className={classes.button} onClick={props.onClickShowCart}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCardItems}</span>
		</button>
	);
};

export default HeaderCardButton;
