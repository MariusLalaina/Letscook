import React from "react";
import "./meal.scss";
import { Text } from "../../components/Text";
import { Button } from "../../components/button";
import { Link, NavLink } from "react-router-dom";
function Meal() {
  return (
    <div>
      <div className="planner">
        <Text as={"p"} content={"Meal Planners"} classnames={"meal_title"} />
        <div className="buttons">
          <NavLink to={"/breakfast"}>
            <Button classname={"meal_cate"} text={"Breakfast"} />
          </NavLink>
          <NavLink to={"/lunch"}>
            <Button classname={"meal_cate"} text={"Lunch"} />
          </NavLink>
          <NavLink to={"/dinner"}>
            <Button classname={"meal_cate"} text={"Dinner"} />
          </NavLink>
          <NavLink to={"/snack"}>
            <Button classname={"meal_cate"} text={"Snack"} />
          </NavLink>
        </div>
        <div className="meal_text">
          <Text
            as={"p"}
            content={
              "Meal planning is a practical and efficient approach to managing your diet and nutrition. It involves the process of deciding in advance what you'll eat for specific meals over a designated period, typically a week. Whether you're aiming to eat healthier, save time, reduce food waste, or stick to a budget, meal planning can help you achieve your goals."
            }
          />
          <Text
            as={"p"}
            content={
              "By taking the time to plan your meals, you can make well-informed choices about the foods you consume, ensuring a balanced and nutritious diet. It also allows you to consider dietary restrictions or preferences, such as vegetarian, vegan, gluten-free, or low-carb diets. Meal planning is not only beneficial for individuals but also for families, helping streamline the cooking process and making it easier to provide nourishing meals for everyone."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Meal;
