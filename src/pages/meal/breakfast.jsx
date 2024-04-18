import React from "react";
import { Button } from "../../components/button";
import { Text } from "../../components/Text";
import Daily from "../../components/daily";
import { Link } from "react-router-dom";

function Breakfast() {
  return (
    <div>
      <div>
        <Text as={"p"} content={"Meal Planners"} classnames={"meal_title"} />
        <div className="buttons">
          <Link to={"/breakfast"}>
            <Button classname={"clicked"} text={"Breakfast"} />
          </Link>
          <Link to={"/lunch"}>
            <Button classname={"meal_cate"} text={"Lunch"} />
          </Link>
          <Link to={"/dinner"}>
            <Button classname={"meal_cate"} text={"Dinner"} />
          </Link>
          <Link to={"/snack"}>
            <Button classname={"meal_cate"} text={"Snack"} />
          </Link>
        </div>
        <div>
          <Text
            as={"p"}
            classnames={"break_title"}
            content={"What's for Breakfast?"}
          />
          <div className="week_plan">
            <Text
              as={"p"}
              classnames={"weekly"}
              content={"Your 7 Breakfast planners"}
            />
            <div className="days">
              <Daily day={"Monday"} />
              <Daily day={"Tuesday"} />
              <Daily day={"Wednesday"} />
            </div>
            <div className="days">
              <Daily day={"Thursday"} />
              <Daily day={"Friday"} />
              <Daily day={"Saturday"} />
            </div>
            <div>
              <Daily day={"Sunday"} />
            </div>
          </div>
          <div className="btn_planner">
            <Button classname={"save"} text={"Save"} />
            <Button classname={"pdf"} text={"Download PDF"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breakfast;
