import React, { useState } from "react";
import "./Found.scss";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase/";
import { Category } from "../../types/category";
import { Location } from "../../types/location";
import { Color } from "../../types/color";
import { v4 as uuidv4 } from "uuid";
import { ref, uploadBytes } from "firebase/storage";

const Found = () => {
  const defaultDebounce = 2000 as const;

  const uploadItem = async () => {
    try {
      let isValid: boolean = true;

      const imageID = uuidv4();

      const uploadItem = {
        title,
        description,
        category,
        color,
        location,
        phone,
        email,
        image: imageID
      };

      Object.entries(uploadItem).forEach(
        async ([key, value]) => !value && (isValid = false)
      );

      if (isValid) {
        await addDoc(collection(db, "items"), uploadItem);
        const storageRef = ref(storage, imageID);

        uploadBytes(storageRef, image!);
        setFeedback("Successfully uploaded Item! Thank you!");
        clearInputs();
        setTimeout(() => setFeedback(""), defaultDebounce);
      } else {
        setFeedback(
          "Something went wrong, please check your input fields!"
        );
        setTimeout(() => setFeedback(""), defaultDebounce);
      }
    } catch (error) {
      console.log(error);
      setFeedback(
        "Something went wrong, please check your input fields!"
      );
      setTimeout(() => setFeedback(""), defaultDebounce);
    }
  };

  const clearInputs = () => {
    setTitle("");
    setDescription("");
    setCategory(Category.Any);
    setColor(Color.Any);
    setLocation(Location.Any);
    setImage(null);
    setPhone("");
    setEmail("");
  };

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<Category>(Category.Any);
  const [color, setColor] = useState<any>(Color.Any);
  const [location, setLocation] = useState<Location>(Location.Any);
  const [image, setImage] = useState<File | null>(null);
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
                onChange={e => {
                  e.target.files &&
                    e.target.files[0] &&
                    setImage(e.target.files[0]);
                }}
              />
              <div className="preview">
                {image && (
                  <div>
                    <img
                      alt="not found"
                      width={"250px"}
                      src={URL.createObjectURL(image)}
                    />
                    <br />
                    <button
                      className="remove"
                      onClick={() => setImage(null)}
                    >
                      Remove
                    </button>
                  </div>
                )}
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
              onClick={() => uploadItem()}
            >
              Submit
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
