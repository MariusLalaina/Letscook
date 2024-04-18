import React from "react";
import Input from "../../components/input";
import {Text,} from "../../components/Text";
import {Button} from "../../components/button";
import "./sign.scss";
import { Form } from "react-router-dom";
import Navbar from "../../components/navbar";
import { UserService } from "../../services/userService";

export const signAction = async ({request})=>{
  const res = await request.formData()
  const data = Object.fromEntries(res)
  const postUser = await UserService.createUser(data);
  console.log(postUser);
  return null
}

function Sign() {
  return (
    <>
    <Navbar/>
      <div className="login">
      <img src="src/img/Rectangle 21.png" alt="Image" className="img_log"/>    
        <Form method="POST" className="sign_form">
          <Text as={"h1"} content={"Sign up for FOOD RECIPE"} />
          <Button classname={"google"} text={"Connect with Google"} />
          <Text as={"b"} content={"Or"} />
          <div className="name">
          <Input name={"first_name"} classnames={"inp_name"} placeholder={"First Name"} />
          <Input name={"last_name"} classnames={"inp_name"} placeholder={"Last Name"} />
          </div>
          <Input name={"username"} classnames={"input"} placeholder={"User-Name"} />
          <Input name={"email"} classnames={"input"} placeholder={"E-mail"} />
          <Input name={"password"} classnames={"input"} placeholder={"Password"} />
          <Text classnames={"terms"} as={"p"} content={"By creating an account, you agree to our Terms of use and Privacy policy"} />
          <Button classname={"log"} text={"Sign up"} />
          <Text
            classnames={"tolog"}
            as={"p"}
            content={"Already have an account?"}
          />
        </Form>
      </div>
    </>
  );
}

export default Sign;
