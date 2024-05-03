import React from 'react'

function Input({classnames,placeholder, name, value}) {
    return (
      <input name={name} className={classnames} placeholder={placeholder} defaultValue={value}/>
    )
  }
export default Input