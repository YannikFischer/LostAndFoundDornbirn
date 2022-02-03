import React, { useEffect, useState } from "react";
import "./ItemList.scss";
import rat from "../../images/Anton.jpg";
import Item from "../../components/item/item";

const ItemList = () => {
  const [items, setItems] = useState([
    { title: "eins", description: "lost it yesterday" },
    { title: "zwei", description: "xxx it yesterday" },
  ]);

  useEffect(() => {
    fetch("http://localhost:4041/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setItems(json.users);
      });
  }, []);

  function getItemList() {
    let widgets: JSX.Element[] = [];
    items.forEach((item) => {
      widgets.push(<Item title={item.title} description={item.description} />);
    });
    return widgets;
  }

  return <div className="items_Wrapper">{getItemList()}</div>;
};

export default ItemList;
