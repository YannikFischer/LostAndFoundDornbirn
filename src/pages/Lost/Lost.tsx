import {
  collection,
  DocumentData,
  getDocs,
  query,
  where
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db, storage } from "../../firebase";
import { Category } from "../../types/category";
import { Color } from "../../types/color";
import { Location } from "../../types/location";
import "./Lost.scss";
import Item from "../../components/item/item";
import { getDownloadURL, ref } from "firebase/storage";

const Lost = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 820);
  const [items, setItems] = useState<any[]>([]);
  const [category, setCategory] = useState<Category>(Category.Any);
  const [color, setColor] = useState<Color>(Color.Any);
  const [location, setLocation] = useState<Location>(Location.Any);

  const readItems = async () => {
    let tempItems: DocumentData[] = [];

    (
      await getDocs(
        query(
          collection(db, "items"),
          category !== Category.Any
            ? where("category", "==", category)
            : where("category", "!=", null)
        )
      )
    ).forEach(doc => tempItems.push(doc.data()));

    tempItems =
      color !== Color.Any
        ? tempItems.filter(it => it.color === color)
        : tempItems;
    tempItems =
      location !== Location.Any
        ? tempItems.filter(it => it.location === location)
        : tempItems;

    setItems(
      await Promise.all(
        tempItems.map(async it => ({
          ...it,
          imageId: it.image,
          imageUrl: await getDownloadURL(ref(storage, it.image))
        }))
      )
    );
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) setMobile(false);
      else if (window.innerWidth < 820) setMobile(true);
    });
    return () => window.removeEventListener("resize", () => {});
  });

  return (
    <>
      <div
        className="main_lost"
        style={
          mobile
            ? { flexDirection: "column", height: "auto" }
            : { flexDirection: "row" }
        }
      >
        <div
          className="main_lost__selection_wrapper"
          style={mobile ? { minHeight: "700px" } : {}}
        >
          <div className="main_lost__selection_wrapper__select_category">
            <label className="main_lost__selection_wrapper__select_category__label">
              Category
            </label>
            <div className="main_lost__selection_wrapper__select_category__select">
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
          <div className="main_lost__selection_wrapper__select_color">
            <label className="main_lost__selection_wrapper__select_color__label">
              Color
            </label>
            <div className="main_lost__selection_wrapper__select_color__select">
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
          <div className="main_lost__selection_wrapper__select_location">
            <label className="main_lost__selection_wrapper__select_location__label">
              Location
            </label>
            <div className="main_lost__selection_wrapper__select_location__select">
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

          <button
            className="main_lost__selection_wrapper__submit"
            onClick={() => readItems()}
          >
            Search
          </button>
        </div>

        <div
          className="main_lost__items"
          style={
            mobile
              ? {
                  minHeight: "300px",
                  alignItems: "center",
                  justifyContent: "center"
                }
              : { alignItems: "center", justifyContent: "center" }
          }
        >
          {items.length < 1 ? (
            <h1>
              Search your Lost Item <br />
              <br />
              Choose a Category, Color and Location and hit Submit
            </h1>
          ) : (
            <>
              {items.length > 0
                ? items.map((item, i) => {
                    return (
                      <Item
                        key={`${item}-${i}`}
                        id={item.imageId}
                        title={item.title}
                        description={item.description}
                        image={item.imageUrl}
                        delay={i * 100}
                      ></Item>
                    );
                  })
                : null}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Lost;
