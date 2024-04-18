import React from 'react'

function Input({classnames,placeholder, name}) {
    return (
      <input name={name} className={classnames} placeholder={placeholder}/>
    )
  }
export default Input