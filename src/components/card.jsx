import React from "react";
import "./card.scss";
import {Button} from "./button";

function Card({ url, content, catego }) {
  return (
    <>
      <div className="card">
        <img src={url} alt="img" />
        <div className="infos">
        <div className="stars">
          <img src="src/img/star.jpg" alt="" />
          <img src="src/img/star.jpg" alt="" />
          <img src="src/img/star.jpg" alt="" />
          <img src="src/img/star.jpg" alt="" />
          <img src="src/img/star.jpg" alt="" />
        </div>
        <p className="content">{content}</p>
        <Button
          classname={catego == "private" ? "private" : "public"}
          text={catego == "private" ? "Private" : "Public"}
        />
        </div>
      </div>
    </>
  );
}

export default Card;
