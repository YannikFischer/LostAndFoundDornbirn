import './item.scss';
import { Color } from '../../types/color';

interface Item {
  id: string;
  title: string;
  description: string;
  image?: string;
  color: Color;
}

const item = ({ id, title, description, image, color }: Item) => {
  return (
    <a className='main_item' href={`/items/${id}`}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#3a89c2'
          fill-opacity='1'
          d='M0,160L26.7,149.3C53.3,139,107,117,160,144C213.3,171,267,245,320,250.7C373.3,256,427,192,480,138.7C533.3,85,587,43,640,42.7C693.3,43,747,85,800,96C853.3,107,907,85,960,69.3C1013.3,53,1067,43,1120,64C1173.3,85,1227,139,1280,165.3C1333.3,192,1387,192,1413,192L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z'
        ></path>
      </svg>
      <div className='main_item__img_container'>
        <img src={image} alt='item_picture' className='img_responsive' />
      </div>

      <div className='main_item__desc'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default item;
