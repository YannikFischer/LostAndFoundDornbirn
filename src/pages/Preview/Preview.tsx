import React from "react";
import "./Preview.scss";

const Preview = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
        rel="stylesheet"
      />
      <div className="preview_page">
        <div className="img-title-box">
          <div className="imageBox">
            <img
              src="../assets/Anton.jpg"
              alt="item_picture"
              className="img_responsive"
            />
          </div>
          <div className="infoBox">
            <h1>Item Title</h1>
            <div className="descriptionBox">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
              </p>
            </div>
          </div>
          <div className="contactInfoBox">
            <h1>Contact Information</h1>
            <div className="contactInfoItems">
              <div className="phoneNumber">
                <h2>Phone Number:</h2>
                <h3>123456789</h3>
              </div>
              <div className="email">
                <h2>E-Mail:</h2>
                <h3>yannik.derboss@xd.luschnou</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
