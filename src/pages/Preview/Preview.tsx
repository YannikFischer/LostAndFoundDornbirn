import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { db, storage } from '../../firebase';
import Email from '../../images/icon-email.png';
import Phone from '../../images/icon-phone.png';
import Arrow from '../../images/arrow.webp';
import './Preview.scss';

const Preview: React.FC = () => {
  const { id } = useParams();
  const [item, setItem] = useState<any>([]);
  const [mobile, setMobile] = useState(window.innerWidth < 820);
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 820) setMobile(false);
      else if (window.innerWidth < 820) setMobile(true);
    });

    (async () => {
      let tempItems: DocumentData[] = [];

      (
        await getDocs(query(collection(db, 'items'), where('image', '==', id)))
      ).forEach((doc) => tempItems.push(doc.data()));

      setItem(
        (
          await Promise.all(
            tempItems.map(async (it) => ({
              ...it,
              imageId: it.image,
              imageUrl: await getDownloadURL(ref(storage, tempItems[0].image)),
            }))
          )
        )[0]
      );
    })();

    return window.removeEventListener('resize', () => {});
  }, [id]);
  console.log(item);
  return (
    <div
      className='main_preview'
      style={mobile ? { flexDirection: 'column', margin: ' 100px 0' } : {}}
    >
      <div className='main_preview__image-container'>
        <img
          className='main_preview__image'
          src={item.imageUrl}
          alt='item'
          onClick={() => window.open(item.imageUrl, '_blank')}
        />
      </div>
      <div className='main_preview__text-container'>
        <h2 className='main_preview__text-container__title'>{item.title}</h2>
        <p className='main_preview__text-container__description'>
          {item.description}
        </p>
        <span>Color: {item.color}</span>
        <span>Location: {item.location}</span>
        <div className='main_preview__text-container__icons'>
          <a href={'tel:' + item.phone}>
            <img src={Phone} alt='Phone' />
          </a>
          <a href={'mailto:' + item.email}>
            <img src={Email} alt='Email' />
          </a>
        </div>
      </div>
      <img id='fab' src={Arrow} alt='' onClick={() => navigate(-1)} />
    </div>
  );
};

export default Preview;
