import React from 'react'
import './daily.scss'
import { Text } from './Text'
import Input from './input'

function Daily({day,}) {
  return (
    <div>
        <Text as={"p"} content={day} classnames={"day"}/>
        <Input classnames={"day_inp"}/>
    </div>
  )
}

export default Daily