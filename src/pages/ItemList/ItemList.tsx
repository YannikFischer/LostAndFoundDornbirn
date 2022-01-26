import React from "react";
import "./ItemList.scss";
import rat from "../../images/Anton.jpg";
import Item from "../../components/item/item";

const ItemList = () => {
  return (
    <div className="items_Wrapper">
      <Item title={"lmao"} description={"eheheh"} />
    </div>
  );
};

export default ItemList;
