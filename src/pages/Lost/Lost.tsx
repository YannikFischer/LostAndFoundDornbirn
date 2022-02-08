import React from "react";
import "./Lost.scss";

const Lost = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
        rel="stylesheet"
      />

      <div className="lost_wrapper">
        <div className="selection_wrapper">
          <div className="selection">
            <div className="select">
              <label className="label_category">Category</label>
              <div className="select_div">
                <select>
                  <option>Phones</option>
                  <option>Headphones</option>
                  <option>Other Electronics</option>
                  <option>Clothes</option>
                  <option>Others</option>
                </select>
              </div>
            </div>
            <div className="select">
              <label className="label_color">Color</label>
              <div className="select_div">
                <select>
                  <option>Black</option>
                  <option>White</option>
                  <option>Blue</option>
                  <option>Red</option>
                  <option>Yellow</option>
                  <option>Green</option>
                  <option>Gray</option>
                  <option>Brown</option>
                  <option>Others</option>
                </select>
              </div>
            </div>
            <div className="select">
              <label className="label_location">Location</label>
              <div className="select_div">
                <select>
                  <option>Turnsaal</option>
                  <option>Klassen Erdgeschoss</option>
                  <option>Klassen 1. Stock</option>
                  <option>Klassen 2. Stock</option>
                  <option>Woanders</option>
                </select>
              </div>
            </div>
          </div>
          <div className="container">
            <button id="button" className="submit">
              Search
            </button>
          </div>
        </div>
        <div className="text_container">
          <h1>
            Search your Lost Item <br />
            <br />
            Choose a Category, Color and Location and hit Submit
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Lost;
