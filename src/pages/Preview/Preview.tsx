import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  where
} from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db, storage } from "../../firebase";
import "./Preview.scss";

const Preview: React.FC = () => {
  const { id } = useParams();
  const [item, setItem] = useState<any>([]);

  useEffect(() => {
    (async () => {
      let tempItems: DocumentData[] = [];

      (
        await getDocs(
          query(collection(db, "items"), where("image", "==", id))
        )
      ).forEach(doc => tempItems.push(doc.data()));

      setItem(
        (
          await Promise.all(
            tempItems.map(async it => ({
              ...it,
              imageId: it.image,
              imageUrl: await getDownloadURL(
                ref(storage, tempItems[0].image)
              )
            }))
          )
        )[0]
      );
    })();
  }, []);

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
              src={item.imageUrl}
              alt="item_picture"
              className="img_responsive"
            />
          </div>
          <div className="infoBox">
            <h1>{item.title}</h1>
            <div className="descriptionBox">
              <p>{item.description}</p>
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
