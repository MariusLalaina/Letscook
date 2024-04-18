import React from "react";
import {Button} from "./button";
import Input from "./input";
import { Lien, Text } from "./Text";
import { Link, NavLink } from "react-router-dom";
import Search from "./search";
import "./nav.scss";

function Navbar() {
  return (
    <div className={"nav"}>
      <img src="src/img/image 2.png" alt="Logo" />
      <div className={"menu"}>
      <NavLink to={"/"} className={"menu_li"}>
        <Text as="p" content="Home" />
        </NavLink>
        <NavLink to={"/categorie"} className={"menu_li"}>
        <Text classnames={"cate"} as="p" content="Categories "/>
        </NavLink>
        <NavLink to={"/meal"} className={"menu_li"}>
        <Text as="p" content="Meal Planners" />
        </NavLink>
        <NavLink to={"/courses"} className={"menu_li"}>
        <Text as="p" content="Courses" />
        </NavLink>
        <NavLink to={"/about"} className={"menu_li"}>
        <Text as="p" content="About Us" />
        </NavLink>
        <NavLink to={"/contact"} className={"menu_li"}>
        <Text as="p" content="Contact" />
        </NavLink>
      </div>
      <div className="button">
        <Search holder={"Search"}/>
        <Link to="/log">
          <Button classname={"log"} text={"Log in"} />
        </Link>
        <Link to="/signup">
          <Button classname={"sign"} text={"Sign Up"} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
