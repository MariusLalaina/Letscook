import React, { useState } from "react";
import { Text } from "../../components/Text";
import  Footer from "../../components/footer";
import './profil.scss'

function Profil() {
  const [click, setClick] = useState(null)

  const Clicked = ()=>{
    click === true ? setClick(false) : setClick(true)
    
  }
  return (
    <>
      <div className="profil_pg">
        <img src="src/img/profil1.png" alt="" />
        <Text as={"p"} content={"My profil"} classnames={"myprofil"}/>
        <div className="profil_informations">
          <Text as={"p"} content={"User Name"}/>
          <Text as={"p"} content={"Gender : Male/Female"}/>
          <Text as={"p"} content={"Registered since : D/M/Y"}/>
        </div>
      </div>
      <div className="menus_profil">
      <div className="profil_menu_title">
        <img src={click ? "src/img/ChevronDown.png":"src/img/ChevronRight.png"} alt="" onClick={Clicked}/>
        <Text as={"p"} content={"Profil menu"} classnames={click? "active" : null}/>
      </div>
      <div className={click ? "profils_menus_active" : "profil_menus"}>
          <Text as={"p"} content={"MY PERSONAL INFORMATION"} classnames={"profil_menu"}/>
          <Text as={"p"} content={"MY CULINARY PREFERENCIES"} classnames={"profil_menu"}/>
          <Text as={"p"} content={"RECIPE"} classnames={"profil_menu"}/>
          <Text as={"p"} content={"FAVORITE RECIPE"} classnames={"profil_menu"}/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Profil;
