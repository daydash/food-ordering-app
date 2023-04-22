import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
	const cardItems = (
		<ul className={classes["cart-items"]}>
			{[
				{
					id: "c1",
					name: "Shusi",
					amount: 2,
					price: 1067.13,
				},
			].map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);

	return (
		<Modal onClickHideCart={props.onHideCart}>
			{cardItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>1911.2611</span>
			</div>
			<div className={classes.actions}>
				<button className={classes["button--alt"]} onClick={props.onHideCart}>
					Close
				</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
