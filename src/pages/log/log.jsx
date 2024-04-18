import React from "react";
import Input from "../../components/input";
import { Lien, Text } from "../../components/Text";
import { Button } from "../../components/button";
import "./log.scss";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";
import { UserService } from "../../services/userService";

export const logAction = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    const login = await UserService.login(data);
    // const tokens = login.data.refreshToken
    const token = localStorage.setItem("token", login.data.token);
    const refresh = localStorage.setItem("refresh", login.data.refreshToken);
    const id = localStorage.setItem("id", login.data.user._id);
    console.log(login.status);
  } catch (error) {
    console.error("Diso daholo");
  }
  return null;
};

function Log() {
  return (
    <>
      <Navbar />
      <div className="login">
        <img src="src/img/Rectangle 21.png" alt="Image" className="img_log" />
        <Form method="POST" className="log_form">
          <Text as={"h1"} content={"Welcome Back"} />
          <Button classname={"google"} text={"Connect with Google"} />
          <Text as={"b"} content={"Or"} />
          <Input name={"email"} classnames={"input"} placeholder={"E-mail"} />
          <Input
            name={"password"}
            classnames={"input"}
            placeholder={"Password"}
          />
          <Link>
            <Text as={"p"} content={"Forget password?"} classnames={"forget"} />
          </Link>
          {/* <Lien classnames={"forget"} content={"Forget password?"} /> */}
          <Button classname={"log"} text={"Log In"} />
          <Text
            classnames={"tosign"}
            as={"p"}
            content={"Don't have an acccount?"}
          />
        </Form>
      </div>
    </>
  );
}

export default Log;
