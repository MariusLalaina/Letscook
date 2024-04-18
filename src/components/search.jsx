import React from 'react'
import './search.scss'
import { Button } from './button'
import Input from './input'


function Search({holder}) {
  return (
    <>
        <div className="inp_search">
          <Button classname={"icon"}/>
          <Input classnames={"search_inp"} placeholder={holder}/>
        </div>
    </>
  )
}

export default Search