import React from "react";
import { Text } from "./Text";
import {Button} from "./button";
import Input from "./input";
import "./nav.scss";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";


function Connected({ classname }) {
 const navigate = useNavigate()
  const logOut = ()=>{
  localStorage.clear()
  navigate("/")
 }
  return (
    <div className="nav">
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
        <NavLink to={"courses"} className={"menu_li"}>
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
        <div className="inp_search">
          <Button classname={"icon"} />
          <Input classnames={"search_inp"} placeholder={"Search"} />
        </div>
        <NavLink to={"/profil"}>
        <img className="user" src="src/img/Frame.png" alt="Connected" />
        </NavLink>
        <img className="notif" src="src/img/Frame (2).png" alt="Notification" />
        <Button classname={"sign"} text={"Log out"} onclick={logOut}/>
      </div>
    </div>
  );
}

export default Connected;
