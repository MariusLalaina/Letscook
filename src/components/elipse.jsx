import React from "react";
import { Text } from "./Text";
import './elipse.scss'

function Elipse({url,content}) {
  return (
    <>
      <div className="round">
        <img className="elipse" src={url} alt="" />
        <Text as={"p"} content={content} classnames={"elipse_text"}/>
      </div>
    </>
  );
}

export default Elipse;
