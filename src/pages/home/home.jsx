import React from "react";
import "./home.scss";
import { Text } from "../../components/Text";
import { Button, Outline } from "../../components/button";
import { NavLink } from "react-router-dom";
import Card from "../../components/card";
import Link from "../../components/link";
import Elipse from "../../components/elipse";
import Input from "../../components/input";
import Collection from "../../components/collection";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

function Home() {
  return (
    <>
    <Navbar/> 
      <div className="hero">
        <img src="src/img/hero.jpg" alt="Hero" />
        <div className="card_hero">
          <div className="text">
            <Text
              classnames={"first"}
              as={"p"}
              content={"85% would make this again"}
            />
            <Text classnames={"second"} as={"p"} content={"Easy cheesecake"} />
            <Text
              classnames={"third"}
              as={"p"}
              content={
                "Inspired by Cheesecake Factory, this New York-style cheesecake is rich, dense yet creamy and not overly sweet"
              }
            />
          </div>
        </div>
        <div className="arrow">
          <img src="src/img/right.png" alt="Arrow" />
        </div>
      </div>
      <div className="recipes">
        <div className="sidemenu">
          <Text classnames={"filter"} as={"p"} content={"Filter Recipes"} />
          <div className="diet">
            <Text classnames={"title"} as={"p"} content={"Diet"} />
            <Link
              to={"/daily"}
              classname={"filter_li"}
              content={"Daily free"}
            />
            <Link to={"/egg"} classname={"filter_li"} content={"Egg free"} />
            <Link
              to={"/sugar"}
              classname={"filter_li"}
              content={"Sugar free"}
            />
            <Link
              to={"/gluttenfree"}
              classname={"filter_li"}
              content={"Gluten free"}
            />
          </div>
          <div className="allergies">
            <Text classnames={"title"} as={"p"} content={"Allergies"} />
            <Link to={"/glutten"} classname={"filter_li"} content={"Glutten"} />
            <Link to={"/legme"} classname={"filter_li"} content={"Legme"} />
            <Link to={"/fruite"} classname={"filter_li"} content={"Fruite"} />
            <Link to={"/grain"} classname={"filter_li"} content={"Grain"} />
          </div>
          <div className="cuisine">
            <Text classnames={"title"} as={"p"} content={"Cuisines"} />
            <Link to={"/asian"} classname={"filter_li"} content={"Asian"} />
            <Link to={"/italian"} classname={"filter_li"} content={"Italian"} />
            <Link to={"/mexican"} classname={"filter_li"} content={"Mexican"} />
            <Link to={"/thai"} classname={"filter_li"} content={"Thai"} />
          </div>
          <div className="goals">
            <Text classnames={"title"} as={"p"} content={"Goals"} />
            <Link
              to={"/wheight"}
              classname={"filter_li"}
              content={"Wheight loss"}
            />
            <Link
              to={"/freshness"}
              classname={"filter_li"}
              content={"Freshness"}
            />
            <Link
              to={"/activeness"}
              classname={"filter_li"}
              content={"Activeness"}
            />
            <Link
              to={"/rich"}
              classname={"filter_li"}
              content={"Rich nutritions"}
            />
          </div>
        </div>
        {/* sidemenu */}
        <div className="card">
          <div className="category">
            <Text as={"p"} content={"Super Delicious"} classnames={"cat"} />
            <div className="cards">
              <Card
                url={"src/img/Rectangle 16.jpg"}
                content={"Cheese Burger"}
                catego={"public"}
              />
              <Card
                url={"src/img/Rectangle 16 (1).jpg"}
                content={"Mac & Cheese"}
                catego={"public"}
              />
              <Card
                url={"src/img/Rectangle 16 (2).jpg"}
                content={"Salad caesar with chicken"}
                catego={"private"}
              />
            </div>
            {/* card */}
          </div>
          {/* category */}
          <div className="category">
            <Text as={"p"} content={"Sweety tooth"} classnames={"cat"} />
            <div className="cards">
              <Card
                url={"src/img/Rectangle 16 (3).jpg"}
                content={"Caramel pots"}
                catego={"public"}
              />
              <Card
                url={"src/img/Rectangle 16 (4).jpg"}
                content={"Cheesecake"}
                catego={"private"}
              />
              <Card
                url={"src/img/Rectangle 16 (5).jpg"}
                content={"Japanese Pancake"}
                catego={"public"}
              />
            </div>
            {/* card */}
          </div>
          {/* category */}
        </div>
        {/* card */}
      </div>
      {/* recipes */}
      <div className="popular">
        <Text as={"p"} content={"Popular categories"} classnames={"cat"} />
        <div className="elipses">
          <Elipse url={"src/img/Ellipse 13.jpg"} content={"Pasta"} />
          <Elipse url={"src/img/Ellipse 13 (1).jpg"} content={"Pizza"} />
          <Elipse url={"src/img/Ellipse 13 (2).jpg"} content={"Vegan"} />
          <Elipse url={"src/img/Ellipse 13 (3).jpg"} content={"Dessert"} />
          <Elipse url={"src/img/Ellipse 13 (6).png"} content={"Smoothie"} />
          <Elipse url={"src/img/Ellipse 13 (4).jpg"} content={"Breakfast"} />
          <Elipse url={"src/img/Ellipse 13 (5).jpg"} content={"Dinner"} />
        </div>
      </div>
      {/* popular */}
      <div className="middle">
        <div className="middle_img">
          <img className="transparent" src="src/img/Rectangle 8.jpg" alt="" />
          <img src="src/img/Rectangle 10.png" alt="" />
        </div>
        <div className="text_middle">
          <Text
            as={"p"}
            classnames={"text_up"}
            content={"Get the recipe book!!!"}
          />
          <Text
            as={"p"}
            classnames={"middle_text"}
            content={
              "A recipe book , guiding both novice and experienced cooks through the art of preparing delightful dishes."
            }
          />
          <Text
            as={"p"}
            classnames={"text_down"}
            content={" Or contact us :+854 745 963"}
          />
          <Input classnames={"email"} placeholder={"E-mail"} />
          <Outline text={"Get"} />
        </div>
      </div>
      {/* middle */}
      <div className="collections">
        <Text
          as={"p"}
          classnames={"title_collec"}
          content={"Hand-Picked Collections"}
        />
        <div className="card_collection">
          <Collection
            url={"src/img/Rectangle 17.png"}
            content={"Sushi combos for your Next Party"}
            recipe={"156recipes "}
          />
          <Collection
            url={"src/img/Rectangle 17 (1).png"}
            content={"Everything bagels"}
            recipe={"156recipes "}
          />

          <Collection
            url={"src/img/Rectangle 17 (2).png"}
            content={"Cook like chefs"}
            recipe={"156recipes "}
          />
          <Collection
            url={"src/img/Rectangle 17 (3).png"}
            content={"Excquise dinner made for you"}
            recipe={"156recipes "}
          />
          <Collection
            url={"src/img/Rectangle 17 (4).png"}
            content={"Made a good choicolate cookie"}
            recipe={"156recipes "}
          />
          <Collection
            url={"src/img/Rectangle 17 (5).png"}
            content={"Eat healthy"}
            recipe={"156recipes "}
          />
        </div>{/* collection */}
      </div>
      {/* collections */}
      <div className="latests">
          <Text as={"p"} content={"Latest recipe"} classnames={"title_latest"}/>
      <div className="latest">
            <img src="src/img/chevron_left.png" alt="left" />
            <img src="src/img/Frame 132.png" alt="img" />
            <img src="src/img/Frame 133.png" alt="img" />
            <img src="src/img/Frame 134.png" alt="img" />
            <img src="src/img/Frame 135.png" alt="img" />
            <img src="src/img/chevron_right.png" alt="right" />

      </div>{/* latest */}
      </div>
      <Footer/>
    </>
  );
}

export default Home;
