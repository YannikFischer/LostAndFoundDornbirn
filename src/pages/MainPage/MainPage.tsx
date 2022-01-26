import React from "react";
import "./MainPage.scss";
import logo from "../../images/LogoMainPage.png";
import cloud from "../../images/Service.png";
import userLeft from "../../images/User_Left.png";
import userRight from "../../images/User_Right.png";

const MainPage = () => {
  return (
    <div id="content">
      <img src={logo} alt="logo" />
      <div id="wrapper">
        <div id="images">
          <div id="lost_div">
            <img src={userLeft} alt="Lost_User_img" id="lost_img" />
          </div>
          <div id="service_div">
            <img src={cloud} alt="service_img" id="service_img" />
          </div>
          <div id="found_div">
            <img src={userRight} alt="Found_User_img" id="found_img" />
          </div>
        </div>
        <div id="text">
          <div id="lost_txt">
            <h1>Lost</h1>
            <p>
              Fast search for lost items by filling in the description of the
              item on the lost page.
            </p>
          </div>
          <div id="service_txt">
            <h1>Service</h1>
            <p>
              Our lost and found service shows the items in the database that
              are likely to match the description of your search.
            </p>
          </div>
          <div id="found_txt">
            <h1>Found</h1>
            <p>
              Easy and fast submission for a found item by filling in the
              description of the description of the item on the found page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
