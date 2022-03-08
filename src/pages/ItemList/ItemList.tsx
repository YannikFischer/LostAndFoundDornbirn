import React, { useEffect, useState } from 'react';
import './ItemList.scss';
import Item from '../../components/item/item';
import { Color } from '../../types/color';

const ItemList = () => {
  const [items, setItems] = useState([
    { title: 'eins', description: 'lost it yesterday' },
    { title: 'zwei', description: 'xxx it yesterday' },
    { title: 'drei', description: 'ayo' },
    { title: 'vier', description: 'xd' },
  ]);

  function getItemList() {
    let widgets: JSX.Element[] = [];
    items.forEach((item) => {
      widgets.push(
        <Item
          title={item.title}
          color={Color.Red}
          description={item.description}
        />
      );
    });
    return widgets;
  }

  return <div className='items_Wrapper'>{getItemList()}</div>;
};

export default ItemList;
