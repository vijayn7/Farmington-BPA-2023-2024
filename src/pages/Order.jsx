import React, { useState } from "react";
import ItemView from "../components/ItemView";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Order = () => {

    const selectedItems = [];

  const handleCardClick = (cardId) => {
    if (!selectedItems.includes(cardId)) {
        selectedItems.push(cardId);
    }
    console.log(selectedItems);
  };

  return (
    <div>
      <ItemView items={selectedItems} />
      <Menu onClickCard={handleCardClick} />
      <Footer />
    </div>
  );
};

export default Order;
