import {
  collection,
  DocumentData,
  getDocs,
  query,
  where
} from "firebase/firestore";
import React, { useState } from "react";
import { db, storage } from "../../firebase";
import { Category } from "../../types/category";
import { Color } from "../../types/color";
import { Location } from "../../types/location";
import "./Lost.scss";
import Item from "../../components/item/item";
import { getDownloadURL, ref } from "firebase/storage";

const Lost = () => {
  const [items, setItems] = useState<any[]>([]);

  const [category, setCategory] = useState<Category>(Category.Any);
  const [color, setColor] = useState<Color>(Color.Any);
  const [location, setLocation] = useState<Location>(Location.Any);

  const readItems = async () => {
    const tempItems: DocumentData[] = [];
    (
      await getDocs(
        query(
          collection(db, "items"),
          where("category", "==", category),
          where("color", "==", color),
          where("location", "==", location)
        )
      )
    ).forEach(doc => tempItems.push(doc.data()));

    setItems(
      await Promise.all(
        tempItems.map(async it => ({
          ...it,
          imageUrl: await getDownloadURL(ref(storage, it.image))
        }))
      )
    );
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
              onClick={() => readItems()}
            >
              Search
            </button>
          </div>
        </div>

        {items.length < 1 && (
          <div className="text_container">
            <h1>
              Search your Lost Item <br />
              <br />
              Choose a Category, Color and Location and hit Submit
            </h1>
          </div>
        )}
        <div className="items_Wrapper">
          {items.length > 0
            ? items.map((item, i) => {
                return (
                  <Item
                    key={`${item}-${i}`}
                    title={item.title}
                    description={item.description}
                    image={item.imageUrl}
                  ></Item>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Lost;
