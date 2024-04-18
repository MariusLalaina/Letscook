import React from "react";
import { Text } from "./Text";
import './collection.scss'

function Collection({ url, content,recipe}) {
  return (
    <>
      <div className="collection">
        <img className="img" src={url} alt="img" />
        <div className="collec_infos">
          <Text as={"p"} content={content} classnames="info" />
          <Text as={"p"} content={recipe} classnames="recipe"/>
        </div>
      </div>
    </>
  );
}

export default Collection;
