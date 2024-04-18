import React from 'react'
import Navlink from "../../components/link"
import Search from "../../components/search"
import './admin.scss'
import { Text } from '../../components/Text'
import { Button } from '../../components/button'
import Card from '../../components/card'
import AdminCard from '../../components/adminCard'

function Admin() {
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
          <div className='admin_container'>
            <div className='all_user_managment'>
              <div className='user_managment_filter'>
                <div>
                  <Text as={"p"} content={"Users"} classnames={"user_managment_title"} />
                  <Text as={"p"} content={"All Users"} />
                </div>
                <div className='user_managment_search_filter'>
                  <Search holder={"Search"} />
                  <div className='list_view'>
                    <img src="src/img/miniature.png" alt="" />
                    <img src="src/img/lists.png" alt="" />
                  </div>
                  <Button classname={"adding_user"} text={"New Users"} />
                </div>{/* user_managment_search_filter */}
              </div>{/* user_managment_filter */}
            <AdminCard url={"src/img/profil.png"} username={"John Doe"} email={"doejohn47@gmail.com"} phone={"+852 456 963"} />
            </div>{/* all_user_managment */}
          </div>{/* admin_container */}
        </div>{/* main_admin */}
      </div>{/* nav_side_bar */}
    </>
  )
}

export default Admin