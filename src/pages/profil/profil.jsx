import React, { useState } from "react";
import { Text } from "../../components/Text";
import Footer from "../../components/footer";
import "./profil.scss";
import { Outlet, Link, Form, redirect } from "react-router-dom";
import { Button } from "../../components/button";
import { UserService } from "../../services/userService";
import ProfilAvatar from "./ProfilAvatar";



function Profil() {
  // const url = `http://localhost:4400/`
  const [click, setClick] = useState(false);

  const Clicked = () => {
    click === true ? setClick(false) : setClick(true);
  };
  return (
    <div className="profil">
        <ProfilAvatar/>
      <div className="menus_profil">
        <div className="profil_menu_title"  onClick={Clicked}>
          <Text
            as={"p"}
            content={"Profil menu"}
            classnames={click ? "menu_active" : "menu_disable"}
          />
        </div>
        <div className={click ? "profils_menus_active" : "profil_menus"}>
          <div className="menu_profil">
            <Link to={"personalInfo"} className="men_profil">
            <Text
              as={"p"}
              content={"MY PERSONAL INFORMATION"}
              classnames={"profil_menu"}
            />
            </Link>
            <img src="src/img/ChevronRight.png" alt="" />
          </div>
          <div className="menu_profil">
          <Link to={"culinaryPref"} className="men_profil">
            <Text
              as={"p"}
              content={"MY CULINARY PREFERENCIES"}
              classnames={"profil_menu"}
            />
            </Link>
            <img src="src/img/ChevronRight.png" alt="" />
          </div>
          <div className="menu_profil">
          <Link to={"recipe"} className="men_profil">
            <Text as={"p"} content={"RECIPE"} classnames={"profil_menu"} />
            </Link>
            <img src="src/img/ChevronRight.png" alt="" />
          </div>
          <div className="menu_profil">
            <Link className="men_profil">
            <Text
              as={"p"}
              content={"FAVORITE RECIPE"}
              classnames={"profil_menu"}
            />
            </Link>
            <img src="src/img/ChevronRight.png" alt="" />
          </div>
        </div>
      </div>
      <div className="children">
        <Outlet/> 
      </div>
      <div className="cookie_setting">
        <p className="cookie">
          <span className="cookies">Let's Cook</span>, data controller, collects this data in order to: <br /> manage
          your account and allow you to benefit from the services to which it
          gives you access, improve the quality of its services and develop new
          ones, provide the functionalities necessary for the operation of its
          services and meet legal or regulatory obligations weighing on it and
          court decisions, <br />
          to send you personalized commercial communications
          and measure their performance if you have consented to this <br /> and
          subject to your agreement in the <span className="cookies">cookie configuration module</span> which you
          can withdraw at any time, to reconcile this data with other data
          concerning you in order to enrich the profile on the basis of which
          the content and advertisements are personalized and you display
          personalized content and advertisements. To find out more about the
          management of your personal data and to exercise your rights, you can
          consult our <span className="cookies">personal data protection policy</span>.
        </p>
        <div className="cookie_btn">
          <button className="cookie_account_delete">Delete my account</button>
          <button className="setting_cookie">Cookies Settings</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profil;
