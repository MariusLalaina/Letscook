import React from 'react'
import { Text } from '../../components/Text'
import { Button } from '../../components/button'
import './profil.scss'
import Input from '../../components/input'

function CulinarPref() {
  return (
    <div className='culinary_main'>
      <Text as={"p"} content={"MY CULINARY PREFERENCIES"} classnames={"title_culinary"}/>
    <div className='culinary'>
      <div className='culinary_left'>
      <Text as={"p"} content={"My favorites ingredients"} classnames={"culinary_title"}/>
        <Input classnames={"perso_inp"}  />
        <Input classnames={"perso_inp"}  />
        <Input classnames={"perso_inp"}  />
        <img src="src/img/Rectangle 32.png" alt="" />
        <div>
        <Text as={"p"} content={"My dream meal"} classnames={"culinary_title"}/>
      <Input classnames={"perso_inp"}  />
        </div>
      </div>
      <div className='culinary_right'>
      <Text as={"p"} content={"My most common meal"} classnames={"culinary_title"}/>
        <Input classnames={"perso_inp"}  />
        <img src="src/img/Rectangle 32.png" alt="" />
      <Text as={"p"} content={"My specialities"} classnames={"culinary_title"}/>
        <Input classnames={"perso_inp"}  />
        <img src="src/img/Rectangle 32.png" alt="" />
      <Text as={"p"} content={"My current culinary obsession"} classnames={"culinary_title"}/>
        <Input classnames={"perso_inp"}  />
        <img src="src/img/Rectangle 32.png" alt="" />
      </div>
    </div>
    <Button text={"SAVE"} classname={"prs_btn_save"} />
    </div>
  )
}

export default CulinarPref