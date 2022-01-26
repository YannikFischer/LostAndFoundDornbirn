import React from "react";
import "./item.scss";
import rat from "../../images/Anton.jpg";

interface item {
  title: string;
  description: string;
}

const item = ({ title, description }: item) => {
  return (
    <div className="item">
      <div className="item_img">
        <img src={rat} alt="item_picture" className="img_responsive" />
      </div>
      <h1>{title}</h1>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default item;
