import React, { useState } from "react";
import { Category } from "../../types/category";
import { Color } from "../../types/color";
import { Location } from "../../types/location";
import "./Lost.scss";

const Lost = () => {
  const [category, setCategory] = useState<Category>(Category.Other);
  const [color, setColor] = useState<Color>(Color.Other);
  const [location, setLocation] = useState<Location>(Location.Other);

  const search = () => {
    window.location.href = "itemList";
  };

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
                <select
                  value={category}
                  onChange={e =>
                    setCategory(e.target.value as Category)
                  }
                >
                  {Object.values(Category).map((category, i) => (
                    <option value={category} key={`${category}-${i}`}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="select">
              <label className="label_color">Color</label>
              <div className="select_div">
                <select
                  value={color}
                  onChange={e => setColor(e.target.value as Color)}
                >
                  {Object.values(Color).map((color, i) => (
                    <option value={color} key={`${color}-${i}`}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="select">
              <label className="label_location">Location</label>
              <div className="select_div">
                <select
                  value={location}
                  onChange={e =>
                    setLocation(e.target.value as Location)
                  }
                >
                  {Object.values(Location).map((location, i) => (
                    <option value={location} key={`${location}-${i}`}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="container">
            <button
              id="button"
              className="submit"
              onClick={() => search()}
            >
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
