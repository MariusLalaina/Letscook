import React from "react";
import "./createCourse.scss";
import { Text } from "../../components/Text";
import { Button } from "../../components/button";
function CreateCourse() {
  return (
    <>
      <div className="title_course_creation">
        <img src="src/img/tabler-icon-chevron-left.png" alt="" />
        <Text
          as={"p"}
          classnames={"course_creation_title"}
          content={"Creation Of Course"}
        />
      </div>
      <div className="main_create">
        <div className="main_creation_course">
          <div className="creation_left">
            <div>
              <Text
                as={"p"}
                content={"Catégories"}
                classnames={"creation_title"}
              />
              <input
                type="text"
                placeholder="Ex: Asiatique"
                className="input_creation_select"
              />
            </div>
            <div>
              <Text as={"p"} content={"Name "} classnames={"creation_title"} />
              <input
                type="text"
                placeholder="Ex: Chocolate chip cookies"
                className="input_creation"
              />
            </div>
            <div>
              <Text
                as={"p"}
                content={"Ingredients"}
                classnames={"creation_title"}
              />
              <input
                type="text"
                placeholder="Ex: Chocolate, sugar, ..."
                className="input_creation"
              />
            </div>
            <div>
              <Text
                as={"p"}
                content={"Utensil*"}
                classnames={"creation_title"}
              />
              <input
                type="text"
                placeholder="Ex: pan, bowl ..."
                className="input_creation_select"
              />
            </div>
          </div>
          <div className="creation_right">
            <div>
              <Text
                as={"p"}
                content={"Description of course"}
                classnames={"creation_title"}
              />
              <input type="text" className="input_creation_area" />
            </div>
            <div>
              <Text as={"p"} content={"Video"} classnames={"creation_title"} />
              <input
                type="link"
                placeholder="Link"
                className="input_creation"
              />
            </div>
            <div>
              <Text
                as={"p"}
                content={"Add picture"}
                classnames={"creation_title"}
              />
              <input type="file" name="picture" id="picture" />
            </div>
          </div>
        </div>
        <div className="btn_creation_bottom">
          <Button classname={"publish_course"} text={"Publish"} />
          <Button classname={"cancel_course"} text={"Cancel"} />
        </div>
      </div>
    </>
  );
}

export default CreateCourse;
