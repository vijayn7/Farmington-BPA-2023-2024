import React from "react";
import OrderItem from "../layouts/OrderItem";
import { menuItems } from "../components/Data";

const ItemView = (props) => {
  return (
    <div className="bg-primary m-16 p-6 mt-[8rem] rounded-xl">
      {menuItems.map((item) => {
        return (
          <OrderItem />
        );
      })}
    </div>
  );
};

export default ItemView;
