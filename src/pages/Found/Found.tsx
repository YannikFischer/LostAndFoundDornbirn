import React, { useState } from 'react';
import './Found.scss';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase/';
import { Category } from '../../types/category';
import { Location } from '../../types/location';
import { Color } from '../../types/color';
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadBytes } from 'firebase/storage';

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
        image: imageID,
      };

      Object.entries(uploadItem).forEach(
        async ([key, value]) => !value && (isValid = false)
      );

      if (isValid) {
        await addDoc(collection(db, 'items'), uploadItem);
        const storageRef = ref(storage, imageID);

        uploadBytes(storageRef, image!);
        setFeedback('Successfully uploaded Item! Thank you!');
        clearInputs();
        setTimeout(() => setFeedback(''), defaultDebounce);
      } else {
        setFeedback('Something went wrong, please check your input fields!');
        setTimeout(() => setFeedback(''), defaultDebounce);
      }
    } catch (error) {
      console.log(error);
      setFeedback('Something went wrong, please check your input fields!');
      setTimeout(() => setFeedback(''), defaultDebounce);
    }
  };

  const clearInputs = () => {
    setTitle('');
    setDescription('');
    setCategory(Category.Any);
    setColor(Color.Any);
    setLocation(Location.Any);
    setImage(null);
    setPhone('');
    setEmail('');
  };

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<Category>(Category.Any);
  const [color, setColor] = useState<any>(Color.Any);
  const [location, setLocation] = useState<Location>(Location.Any);
  const [image, setImage] = useState<File | null>(null);
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [feedback, setFeedback] = useState<string>('');

  return (
    <>
      <div className='main_found'>
        <div className='main_found__text'>
          <h1>Found an Item?</h1>
          <p>Enter the the infos and your ready to help!</p>
        </div>
        <div className='main_found__selection_wrapper'>
          <div className='main_found__selection_wrapper__title_wrapper'>
            <label className='main_found__selection_wrapper__title_wrapper__label'>
              Title
            </label>
            <input
              id='select_title_id'
              className='main_found__selection_wrapper__title_wrapper__input'
              name='title_id'
              placeholder='Item Title'
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='main_found__selection_wrapper__desc_wrapper'>
            <label className='main_found__selection_wrapper__desc_wrapper__label'>
              Description
            </label>
            <input
              id='select_description_id'
              className='main_found__selection_wrapper__desc_wrapper__input'
              name='description_id'
              placeholder='Item Description'
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className='main_found__selection_wrapper__category_wrapper'>
            <label className='main_found__selection_wrapper__category_wrapper__label'>
              Category
            </label>
            <div className='main_found__selection_wrapper__category_wrapper__select_wrapper'>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
              >
                {Object.values(Category).map((category, i) => (
                  <option value={category} key={`${category}-${i}`}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='main_found__selection_wrapper__color_wrapper'>
            <label className='main_found__selection_wrapper__color_wrapper__label'>
              Color
            </label>
            <div className='main_found__selection_wrapper__color_wrapper__select_wrapper'>
              <select
                value={color}
                onChange={(e) => setColor(e.target.value as Color)}
              >
                {Object.values(Color).map((color, i) => (
                  <option value={color} key={`${color}-${i}`}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='main_found__selection_wrapper__location_wrapper'>
            <label className='main_found__selection_wrapper__location_wrapper__label'>
              Location
            </label>
            <div className='main_found__selection_wrapper__location_wrapper__select_wrapper'>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value as Location)}
              >
                {Object.values(Location).map((location, i) => (
                  <option value={location} key={`${location}-${i}`}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='main_found__selection_wrapper__input_wrapper'>
            <label className='main_found__selection_wrapper__input_wrapper__label'>
              Upload Image
            </label>
            {!image && (
              <label className='main_found__selection_wrapper__input_wrapper__input'>
                Bild hochladen
                <input
                  type='file'
                  id='uploadImage'
                  name='uploadImage'
                  accept='image/*'
                  onChange={(e) => {
                    e.target.files &&
                      e.target.files[0] &&
                      setImage(e.target.files[0]);
                  }}
                />
              </label>
            )}

            <div className='main_found__selection_wrapper__input_wrapper__image_wrapper'>
              {image && (
                <>
                  <img
                    alt='not found'
                    width={'250px'}
                    src={URL.createObjectURL(image)}
                  />
                  <button className='remove' onClick={() => setImage(null)}>
                    Remove
                  </button>
                </>
              )}
            </div>
          </div>

          <h2>Contact Information</h2>

          <div className='main_found__selection_wrapper__phone_wrapper'>
            <label className='main_found__selection_wrapper__phone_wrapper__label'>
              Phone Number
            </label>
            <input
              id='select_phone_id'
              className='main_found__selection_wrapper__phone_wrapper__input'
              name='phone_id'
              placeholder='Phone Number'
              type='number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className='main_found__selection_wrapper__mail_wrapper'>
            <label className='main_found__selection_wrapper__mail_wrapper__label'>
              E-mail
            </label>
            <input
              id='select_mail_id'
              className='main_found__selection_wrapper__mail_wrapper__input'
              name='mail_id'
              placeholder='E-mail'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='main_found__selection_wrapper__submit'>
            <button
              className='main_found__selection_wrapper__submit'
              onClick={() => uploadItem()}
            >
              Submit
            </button>
          </div>

          <p className='main_found__selection_wrapper__feedback'>{feedback}</p>
        </div>
      </div>
    </>
  );
};

export default Found;
