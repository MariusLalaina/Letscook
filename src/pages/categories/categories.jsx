import React from "react";
import './categories.scss'
import { Text } from "../../components/Text";
import { Button } from "../../components/button";
import Elipse from "../../components/elipse"
import Input from "../../components/input";
import Search from "../../components/search";
import Footer from "../../components/footer";

function Categorie() {
  return (
    <div>
      <Text as={"p"} content={"Categories"} classnames={"cate_title"}/>
      <div className="search_filter">
        <Button classname={"btn_filter"} text={"All categories"}/>
        <div className="filter_input">
          <img className="preference" src="src/img/preference.png" alt="" />
          <Search holder={"Search by name"}/>
        </div>
      </div>
      <div className="circle_container">
      <div className="circles">
        <Elipse url={"src/img/Ellipse 13.jpg"} content={"Vegan"}/>
        <Elipse url={"src/img/Ellipse 13 (1).jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13 (2).jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13.jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13 (3).jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13 (4).jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13 (5).jpg"} content={"Dessert"}/>
      </div>{/* circles */}
      <div className="circles">
        <Elipse url={"src/img/Ellipse 13.jpg"} content={"Vegan"}/>
        <Elipse url={"src/img/Ellipse 13 (1).jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13 (2).jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13.jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13 (3).jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13 (4).jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13 (5).jpg"} content={"Dessert"}/>
      </div>{/* circles */}
      <div className="circles">
        <Elipse url={"src/img/Ellipse 13.jpg"} content={"Vegan"}/>
        <Elipse url={"src/img/Ellipse 13 (1).jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13 (2).jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13.jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13 (3).jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13 (4).jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13 (5).jpg"} content={"Dessert"}/>
      </div>{/* circles */}
      <div className="circles">
        <Elipse url={"src/img/Ellipse 13.jpg"} content={"Vegan"}/>
        <Elipse url={"src/img/Ellipse 13 (1).jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13 (2).jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13.jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13 (3).jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13 (4).jpg"} content={"Dessert"}/>
        <Elipse url={"src/img/Ellipse 13 (5).jpg"} content={"Dessert"}/>
      </div>{/* circles */}
      </div>
      <Footer/>
    </div>
  );
}

export default Categorie;
