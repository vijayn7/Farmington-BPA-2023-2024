import React from "react";
import OrderItem from "../layouts/OrderItem";
import { menuItems } from "../components/Data";

const ItemView = (props) => {
  var selections = props.items;
  console.log(selections);
  return (
    <div className="bg-primary m-16 p-6 mt-[8rem] rounded-xl">
      {selections.length > 0 ? (
        selections.map((item, index) => (
          <OrderItem key={index} name={menuItems[item].itemName} />
        ))
      ) : (
        <p>No items selected</p>
      )}
    </div>
  );
};

export default ItemView;
