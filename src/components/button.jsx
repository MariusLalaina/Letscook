import React from "react";
import './button.scss'

function Button({ classname, text ,onclick}) {
  return (
    <>
      <button type="submit" onClick={onclick} className={classname}>{text}</button>
    </>
  );
}
function Outline({text }) {
  return (
    <>
      <button className="outline">{text}</button>
    </>
  );
}
export {Button,Outline};
