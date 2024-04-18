import React from 'react'
import { Link } from 'react-router-dom';

function Text({classnames, as,content}) {
    const Tag = as;
    return (
      <Tag className = {classnames}>{content}</Tag>
    )
}
function Lien({classnames,link,content}){
  return(
    <Link to={link} className={classnames}>{content}</Link>
  )
}

export {Text,Lien}