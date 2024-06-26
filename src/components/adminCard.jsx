import React from 'react'
import './adminCard.scss'
import { Text } from './Text'
import { NavLink } from 'react-router-dom'

function AdminCard({url, username, email, phone }) {
    return (
        <div>
            <div className="admincard">
                <NavLink to={"/edit"} className='more'>
                <img src="src/img/more.png" alt=""className='more'/>
                </NavLink>
                <img src={url} alt="img" className='avatar'/>
                <Text as={"p"} content={username} classnames={"username"}/>
                <div className="user_infos">
                    <div className="email_user">
                        <img src="src/img/email.png" alt="" />
                        <p className="user_email">{email}</p>
                    </div>
                    {/* <div className="phone">
                        <img src="src/img/contact.png" alt="" />
                        <p className="user_phone">{phone}</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default AdminCard