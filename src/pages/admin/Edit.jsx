import React from "react";
import './edit.scss'
import { Text } from "../../components/Text";
import Search from "../../components/search";
import { Button } from "../../components/button";


function Edit() {
  return (
    <>
    <div className="nav_side_bar">
        <div className='admin_side'>
          <img src="src/img/image 2.png" alt="" />
          <div className='main_menu'>
            <Text as={"p"} content={"Main Menu"} classnames={"main_menu_admin"} />
            <div className='menu_admin'>
              <img src="src/img/admin_icons/dashboard.png" alt="" />
              <Text as={"p"} content={"Dashboard"} classnames={"admin_menu"} />
            </div>
            <div className='menu_admin'>
              <img src="src/img/admin_icons/overview.png" alt="" />
              <Text as={"p"} content={"Overview"} classnames={"admin_menu"} />
            </div>
            <div className='menu_admin'>
              <img src="src/img/admin_icons/recipes.png" alt="" />
              <Text as={"p"} content={"Recipes"} classnames={"admin_menu"} />
            </div>
            <div className='menu_admin'>
              <img src="src/img/admin_icons/ingredients.png" alt="" />
              <Text as={"p"} content={"Ingredients"} classnames={"admin_menu"} />
            </div>
            <div className='menu_admin'>
              <img src="src/img/admin_icons/analytics.png" alt="" />
              <Text as={"p"} content={"Analytics"} classnames={"admin_menu"} />
            </div>
            <div className='menu_admin'>
              <img src="src/img/admin_icons/email.png" alt="" />
              <Text as={"p"} content={"E-mail"} classnames={"admin_menu"} />
            </div>
            <div className='menu_admin'>
              <img src="src/img/admin_icons/chat.png" alt="" />
              <Text as={"p"} content={"Chat"} classnames={"admin_menu"} />
            </div>
            <div className='menu_admin'>
              <img src="src/img/admin_icons/user.png" alt="" />
              <Text as={"p"} content={"User"} classnames={"admin_menu"} />
            </div>
            <div className='menu_admin'>
              <img src="src/img/admin_icons/meal.png" alt="" />
              <Text as={"p"} content={"Meal Planners"} classnames={"admin_menu"} />
            </div>
            <div className='menu_admin'>
              <img src="src/img/admin_icons/support.png" alt="" />
              <Text as={"p"} content={"Support"} classnames={"admin_menu"} />
            </div>
            <div className='menu_admin'>
              <img src="src/img/admin_icons/settings.png" alt="" />
              <Text as={"p"} content={"Settings"} classnames={"admin_menu"} />
            </div>
          </div>
          <div className='side_footer'>
            <Text as={"p"} content={"Footer"} classnames={"main_menu_admin"} />
            <div className='menu_admin'>
              <img src="src/img/admin_icons/settings.png" alt="" />
              <Text as={"p"} content={"Term of use"} classnames={"admin_menu"} />
            </div>
            <div className='menu_admin'>
              <img src="src/img/admin_icons/settings.png" alt="" />
              <Text as={"p"} content={"Privacy Policy"} classnames={"admin_menu"} />
            </div>
            <div className='menu_admin'>
              <img src="src/img/admin_icons/settings.png" alt="" />
              <Text as={"p"} content={"Logout"} classnames={"admin_menu"} />
            </div>
          </div>
        </div>
        <div className='main_admin'>
          <div className="navbar">
            <Search holder={"Search"} />
            <Text as={"p"} content={"Others menu"} classnames={"oth_menu"} />
            <div className='allergic_alert'>
              <img src="src/img/notif.png" alt="" />
              <img src="src/img/alergic.png" alt="" />
              <Text as={"p"} content={"Allergic alert"} classnames={"alergic_alert"} />
            </div>
            <div className='profil_connected'>
              <img src="src/img/profil.png" alt="" />
              <div className='info_profil_connected'>
                <Text as={"p"} content={"John Doe"} classnames={"username_profil"} />
                <Text as={"p"} content={"Super Admin"} classnames={"profil_post"} />
              </div>
              <img src="src/img/chevron-down.png" alt="" />
            </div>
          </div>
          <div className="edit_profil">
            <div className="profil_information">
                <div className="avatar_profil">
                    <img src="src/img/avatar_profil.png" alt="" />
                    <Text as={"p"} content={"John Doe"} classnames={"avatar_profil_username"}/>
                </div>{/* avatar_profil */}
                <div className="profil_crudential">
                    <div className="crudential">
                        <Text as={"p"} content={"Name:"} classnames={"bold_crudential"}/>
                        <Text as={"p"} content={"John Doe"}/>
                    </div>
                    <div className="crudential">
                        <Text as={"p"} content={"E-mail:"} classnames={"bold_crudential"}/>
                        <Text as={"p"} content={"doejohn47@gmail.com"}/>
                    </div>
                    <div className="crudential">
                        <Text as={"p"} content={"Registration date:"} classnames={"bold_crudential"}/>
                        <Text as={"p"} content={"12/08/21"}/>
                    </div>
                    <div className="crudential">
                        <Text as={"p"} content={"Contact: "} classnames={"bold_crudential"}/>
                        <Text as={"p"} content={"+852 456 963"}/>
                    </div>
                    <div className="food_preference">
                    <Text as={"p"} content={"Food Preferences"} classnames={"bold_preferences"}/>
                    <div className="elipse_preference">
                    <div className="circle_preference">
                    <img src="src/img/Ellipse 13 (1).jpg" alt=""  className="preference_elipse"/>
                    <Text as={"p"} content={"Pizza"} classnames={"bold"}/>
                    </div>
                    <div className="circle_preference">
                    <img src="src/img/Ellipse 13 (2).jpg" alt=""  className="preference_elipse"/>
                    <Text as={"p"} content={"Vegan"} classnames={"bold"}/>
                    </div>
                    <div className="circle_preference">
                    <img src="src/img/Ellipse 13 (3).jpg" alt=""  className="preference_elipse"/>
                    <Text as={"p"} content={"Dessert"} classnames={"bold"}/>
                    </div>
                    <div className="circle_preference">
                    <img src="src/img/Ellipse 13 (4).jpg" alt=""  className="preference_elipse"/>
                    <Text as={"p"} content={"Fruits"} classnames={"bold"}/>
                    </div>
                    <div className="circle_preference">
                    <img src="src/img/Ellipse 13 (5).jpg" alt=""  className="preference_elipse"/>
                    <Text as={"p"} content={"Chicken"} classnames={"bold"}/>
                    </div>
                    </div>
                </div>
                </div>{/* profil_crudential */}
                <div className="cooking_skill">
                    <Text as={"p"} content={"Level of cooking skills"} classnames={"bold"}/>
                    <div className="level">
                        <Text as={"p"} content={"Beginner"}/>
                        <div className="percent">
                            <img src="src/img/41.png" alt="" />
                            <Text as={"p"} content={"41%"}/>
                        </div>
                    </div>
                    <div className="level">
                        <Text as={"p"} content={"Intermediate"}/>
                        <div className="percent">
                            <img src="src/img/22.png" alt="" />
                            <Text as={"p"} content={"22%"}/>
                        </div>
                    </div>
                    <div className="level">
                        <Text as={"p"} content={"Advanced"}/>
                        <div className="percent">
                            <img src="src/img/0.png" alt="" />
                            <Text as={"p"} content={"0%"}/>
                        </div>
                    </div>
                    <div className="level">
                        <Text as={"p"} content={"Chef"}/>
                        <div className="percent">
                            <img src="src/img/0.png" alt="" />
                            <Text as={"p"} content={"0%"}/>
                        </div>
                    </div>
                </div>
                <div className="alergie">
                <Text as={"p"} content={"Allergic:"} />
                <Text as={"p"} content={"Tree Nuts"} classnames={"alergic bold"}/>
                </div>
                <div className="btn_edit_user">
                    <Button classname={"remove_user"} text={"Remove user"}/>
                    <Button classname={"disable_user"} text={"Disable"}/>
                </div>
            </div>{/* profil_information */}
            <div className="profil_courses">
                <div className="menu_profil_courses">
                <Text as={"p"} content={"John Course"}/>
                <div className="user_course_display_edit">
                  <img src="src/img/miniature.png" alt="" />
                  <img src="src/img/preference.png" alt="" />
                </div>  
                </div>
            </div>
          </div>{/* edit_profil */}
        </div>{/* main_admin */}
      </div>{/* nav_side_bar */}
    </>
  )
}
export default Edit;
