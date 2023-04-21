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
		<div>
			{cardItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>1911.2611</span>
			</div>
			<div className={classes.action}>
				<button className={classes["button--alt"]}>Close</button>
				<button className={classes.button}>Close</button>
			</div>
		</div>
	);
};

export default Cart;
