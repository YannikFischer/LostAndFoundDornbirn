import React from "react";
import "./MainPage.scss";
import logo from "../../images/LogoMainPage.png";
import cloud from "../../images/Service.png";
import userLeft from "../../images/User_Left.png";
import userRight from "../../images/User_Right.png";

const MainPage = () => {
  console.log(process.env);
  return (
    <div id="content">
      <div id="logo_div">
        <img src={logo} alt="logo" id="logo_img" />
      </div>
      <div id="wrapper">
        <div id="blocks">
          <div id="lost_block">
            <div id="image">
              <img src={userLeft} alt="Lost_User_img" id="lost_img" />
            </div>
            <div id="text">
              <h1>Lost</h1>
              <p>
                Fast search for lost items by filling in the
                description of the item on the Lost page.
              </p>
            </div>
          </div>

          <div id="service_block">
            <div id="image">
              <img src={cloud} alt="service_img" id="service_img" />
            </div>
            <div id="text">
              <h1>Service</h1>
              <p>
                Our lost and found service shows the items in our
                database that are most likely to match the description
                of your search.
              </p>
            </div>
          </div>

          <div id="found_block">
            <div id="image">
              <img
                src={userRight}
                alt="Found_User_img"
                id="found_img"
              />
            </div>
            <div id="text">
              <h1>Found</h1>
              <p>
                Easy and fast submission for a found item by filling
                in the description of the item on the found page
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
