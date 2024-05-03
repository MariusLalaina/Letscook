import React from "react";
import { Text } from "../../components/Text";
import { Button } from "../../components/button";
import Input from "../../components/input";
import "./perso.scss";
import { UserService } from "../../services/userService";
import { Form, Navigate, redirect, useNavigate } from "react-router-dom";

export const infoAction = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    const update = await UserService.updateUser(data); 
     const userName = localStorage.setItem(
        "username",
        update.user.username
      );
      const email = localStorage.setItem("email", update.user.email);

    // console.log(update);
  } catch (error) {
    console.error(error.message);
  }
  return redirect ("/");
};
function PersoInfo() {
  return (
    <Form method="PUT">
      <Text
        as={"p"}
        content={"My personal information"}
        classnames={"persoInfo_title"}
      />
      <div className="prs">
        <div className="prs_info">
          <div className="persoInfo_left">
            <input
            name="id"
              type="text"
              defaultValue={localStorage.getItem("id")}
              hidden
            />
            <Input
              name={"username"}
              classnames={"perso_inp"}
              placeholder={"Pseudo*"}
              value={localStorage.getItem("username")}
            />
            <img src="src/img/Rectangle 32.png" alt="" />
            <Input classnames={"perso_inp"} placeholder={"FirstName"} />
            <img src="src/img/Rectangle 32.png" alt="" />
            <Input classnames={"perso_inp"} placeholder={"LastName"} />
            <img src="src/img/Rectangle 32.png" alt="" />
            <Input classnames={"perso_inp"} placeholder={"Birth date"} />
            <img src="src/img/Rectangle 32.png" alt="" />
            <Input classnames={"perso_inp"} placeholder={"Gender"} />
          </div>
          <div className="persoInfo_right">
            <Input
              name={"email"}
              classnames={"perso_inp"}
              placeholder={"E-mail*"}
              value={localStorage.getItem("email")}
            />
            <img src="src/img/Rectangle 32.png" alt="" />
            <Input classnames={"perso_inp"} placeholder={"Password*"} />
            <img src="src/img/Rectangle 32.png" alt="" />
            <Input classnames={"perso_inp"} placeholder={"Adress"} />
            <img src="src/img/Rectangle 32.png" alt="" />
            <Input classnames={"perso_inp"} placeholder={"Postal code"} />
            <img src="src/img/Rectangle 32.png" alt="" />
            <Input classnames={"perso_inp"} placeholder={"Language"} />
          </div>
        </div>
        <Button text={"SAVE"} classname={"prs_btn_save"} />
      </div>
    </Form>
  );
}

export default PersoInfo;
