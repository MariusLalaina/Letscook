import React from "react";
import { NavLink } from "react-router-dom";
import { Text } from "./Text";

function Link({to,icon, content,classname}) {
  return (
    <>
      <NavLink to={to} className={classname}>
        <Text classnames={classname} as={"p"} content={[icon,content]} />
      </NavLink>
    </>
  );
}


export default Link;
