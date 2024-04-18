import React from "react";
import { Text } from "./Text";
import "./footer.scss";
import Input from "./input";
import { Button } from "./button";

function Footer() {
  return (
    <>
      <div className="Foot">
        <div className="footer">
          <div className="social">
            <div className="up_social">
              <Text
                as={"p"}
                content={"Story Connected :"}
                classnames={"social_title"}
              />
              <div className="social_network">
                <img src="src/img/facebook.png" alt="facebook" />
                <img src="src/img/insta.png" alt="instagram" />
                <img src="src/img/heart.png" alt="heart" />
                <img src="src/img/twitter.png" alt="twitter" />
              </div>
            </div>

            <div className="newsletter">
              <Text
                as={"p"}
                content={"Subscribe to our Newsetter"}
                classnames={"letter"}
              />
              <div className="subscribing">
                <Input placeholder={"E-mail"} classnames={"ltr_input"} />
                <Button text={"Subscribe"} classname={"subscribe"} />
              </div>
            </div>
          </div>
          {/* social */}
          <div className="footer_lists">
            <div className="foot">
              <Text as={"p"} content={"Home"} classnames={"foot_list"} />
              <Text as={"p"} content={"Recipes"} classnames={"foot_list"} />
              <Text as={"p"} content={"About Us"} classnames={"foot_list"} />
              <Text
                as={"p"}
                content={"Privacy Policy"}
                classnames={"foot_list"}
              />
              <Text
                as={"p"}
                content={"Terms of service"}
                classnames={"foot_list"}
              />
              <Text as={"p"} content={"sitemap"} classnames={"foot_list"} />
              <Text as={"p"} content={"Contact us"} classnames={"foot_list"} />
              <Text as={"p"} content={"Blog"} classnames={"foot_list"} />
              <Text as={"p"} content={"Career"} classnames={"foot_list"} />
            </div>
            <div className="foot">
              <Text as={"p"} content={"Dinner"} classnames={"foot_list"} />
              <Text as={"p"} content={"Meals"} classnames={"foot_list"} />
              <Text as={"p"} content={"Ingredients"} classnames={"foot_list"} />
              <Text
                as={"p"}
                content={"Product vetting"}
                classnames={"foot_list"}
              />
              <Text as={"p"} content={"Occasions"} classnames={"foot_list"} />
              <Text as={"p"} content={"Cuisines"} classnames={"foot_list"} />
              <Text
                as={"p"}
                content={"Kitchen Tips"}
                classnames={"foot_list"}
              />
              <Text as={"p"} content={"News"} classnames={"foot_list"} />
              <Text as={"p"} content={"Feature"} classnames={"foot_list"} />
            </div>
            <div className="foot">
              <Text as={"p"} content={"Forum"} classnames={"foot_list"} />
              <Text
                as={"p"}
                content={"Questions/Answer"}
                classnames={"foot_list"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
