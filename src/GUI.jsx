import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Connected from "./components/connected";
import './Gui.scss'
import {Button} from "./components/button";
import Input from "./components/input";
import Card from "./components/card";
import Footer from "./components/footer";


function GUI() {
  return (
    <>
     <Navbar classname={'nav'}/>
     <Connected classname={'nav'}/>
     <Button classname={"google"} text={"Connect with Google"}/>
     <Button classname={"public"} text={"Public"}/>
     <Button classname={"private"} text={"Private"}/>
     <Button classname={"sign"} text={"Sign Up"}/>
     <Input classnames={"input"} placeholder={"E-mail"}/>
     <div className="inp_search">
        <Button classname={"icon"}/>
        <Input classnames={"search_inp"} placeholder={"Search"}/>
     </div>
     < Card url={"src/img/Rectangle 16.jpg"} content={"Cheese burger"} catego={"public"}/>
     < Card url={"src/img/Rectangle 16 (1).jpg"} content={"Mac & Cheese"} catego={"private"}/>
    <Footer/>
    <Outlet/>
    </>
  )
}

export default GUI;
