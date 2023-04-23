import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

import MealItem from "./MealItem/MealItem";

import DUMMY_MEALS from "./dummy-meals";

const AvailableMeals = (props) => {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			// price={meal.price * 82.15}
			price={meal.price}
		/>
	));
	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
