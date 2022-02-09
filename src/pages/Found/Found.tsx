import React, { useState } from "react";
import "./Found.scss";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase/";
import { Category } from "../../types/category";
import { Location } from "../../types/location";
import { Color } from "../../types/color";
import useDebounce from "../../hooks/useDebounce";

const Found = () => {
  const defaultDebounce = 2000 as const;

  const readItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  };

  const uploadItem = async () => {
    let isValid: boolean = true;

    const uploadItem = {
      title,
      description,
      category,
      color,
      location,
      phone,
      email
    };

    Object.entries(uploadItem).forEach(
      async ([key, value]) => !value && (isValid = false)
    );

    if (isValid) {
      const docRef = await addDoc(
        collection(db, "items"),
        uploadItem
      );
      console.log("Document written with ID: ", docRef);
      setFeedback("Successfully uploaded Item! Thank you!");
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useDebounce(() => setFeedback(""), defaultDebounce, [feedback]);
    } else {
      setFeedback(
        "Something went wrong, please check your input fields!"
      );
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useDebounce(() => setFeedback(""), defaultDebounce, [feedback]);
    }
  };

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<Category>(Category.Other);
  const [color, setColor] = useState<any>(Color.Other);
  const [location, setLocation] = useState<Location>(Location.Other);
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [feedback, setFeedback] = useState<string>("");

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
                value={title}
                onChange={e => setTitle(e.target.value)}
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
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
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
            <div className="select">
              <label className="label_uploadImage">
                Upload Image
              </label>
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
                type=""
                value={phone}
                onChange={e => setPhone(e.target.value)}
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
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="container">
            <button
              id="button"
              className="submit"
              onClick={() => readItems()}
            >
              Read Items (Read items)
            </button>
            <button
              id="button"
              className="submit"
              onClick={() => uploadItem()}
            >
              Submit (Write item)
            </button>

            <p className="feedback">{feedback}</p>
          </div>
        </div>
        <div className="text_container">
          <h1>
            Submit your Found Item <br />
            <br />
            Select a Title and Description that fits the Item you have
            found <br />
            <br />
            Choose a Category, Color, Location and an Image
            <br />
            <br />
            Enter your Contact Information and hit Submit
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Found;
