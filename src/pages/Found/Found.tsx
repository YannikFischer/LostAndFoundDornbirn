import React from "react";
import "./Found.scss";

const Found = () => {
  return (
    <div>
      <div className="found_wrapper">
        <div className="selection_wrapper">
          <div className="selection">
            <div className="select">
              <label className="label_title">Title</label>
              <input
                id="select_title_id"
                className="select_title"
                name="title_id"
                placeholder="Item Title"
                type="text"
              />
            </div>
            <div className="select">
              <label className="label_description">Description</label>
              <input
                id="select_description_id"
                className="select_description"
                name="description_id"
                placeholder="Item Description"
                type="text"
              />
            </div>
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
            <div className="select">
              <label className="label_uploadImage">Upload Image</label>
              <input
                type="file"
                id="uploadImage"
                className="select_uploadImage"
                name="uploadImage"
                accept="image/*"
              />
              <div className="preview">
                {/* <img v-if="url" :src="url" /> */}
              </div>
            </div>
            <div className="contactInformationh1Div">
              <h1>Contact Information</h1>
            </div>
            <div className="select">
              <label className="label_phone">Phone Number</label>
              <input
                id="select_phone_id"
                className="select_phone"
                name="phone_id"
                placeholder="Phone Number"
                type="number"
              />
            </div>
            <div className="select">
              <label className="label_mail">E-mail</label>
              <input
                id="select_mail_id"
                className="select_mail"
                name="mail_id"
                placeholder="E-mail"
                type="email"
              />
            </div>
          </div>
          <div className="container">
            <button id="button" className="submit">
              Submit
            </button>
          </div>
        </div>
        <div className="text_container">
          <h1>
            Submit your Found Item <br />
            <br />
            Select a Title and description that fits the Item you have found{" "}
            <br />
            <br />
            Choose a Category, Color, Location and an Image
            <br />
            <br />
            Enter your contact information and hit Submit
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Found;
