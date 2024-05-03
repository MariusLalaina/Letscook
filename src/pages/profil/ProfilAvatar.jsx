import React, { useState } from 'react'
import { Form, redirect } from 'react-router-dom'
import { Button } from '../../components/button';
import { Text } from '../../components/Text';
import { UserService } from '../../services/userService';


 function  ProfilAvatar() {
  const formData = new FormData();
  const id = localStorage.getItem("id")
    const [file, setFile] = useState(null);
    let img =null
  const handleChange =(event) =>{
    // console.log(event.target.files[0]);
    img=event.target.files[0]
    // console.log(file);
  console.log(img);
  }

  const handleClick = async ()=>{
      formData.append('userId' , id)
      formData.append('file', img)
     const avatar = await UserService.postAvatar(formData);
     console.log(avatar);
     if (avatar.status ==200 || avatar.status ==201) {
        localStorage.setItem('avatar', `http://localhost:4400/${avatar.data.image.nameHashed}`)
     }
     

  }
  return (
    <>
        <Form className="profil_pg">
        <input
            name="id"
              type="text"
              defaultValue={localStorage.getItem("id")}
              hidden
            />
        <label htmlFor="avatar">
        <img className="profil_avatar" src={localStorage.getItem("avatar") ? localStorage.getItem("avatar") : "src/img/profil1.png"} alt="" /> 
        </label>
        <input type="file" name="avatar" id="avatar" onChange={handleChange} hidden/>
        <Text as={"p"} content={"My profil"} classnames={"myprofil"} />
        <div className="profil_informations">
          <Text as={"p"} content={localStorage.getItem("username")} />
          {/* <Text as={"p"} content={"Gender : Male/Female"} /> */}
          <Text as={"p"} content={`Registered since : ${localStorage.getItem("registrDate")}` } />
        </div>
        <Button onclick={handleClick} classname={"img_avatar"? "post_avatar":"hidden"} text={"Save"}/>
        </Form>
    </>
  )
}

export default ProfilAvatar