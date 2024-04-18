import React from "react";
import { Text } from "./components/Text";
import './error.scss'

function ErrorElement() {
  return (
    <>
      <div className="error">
        <img className="error_img" src="src/img/errors.jpg" alt="Error" />
        <Text as={"h1"} content={"An error suddenly happens"}/>
      </div>
    </>
  );
}

export default ErrorElement;
