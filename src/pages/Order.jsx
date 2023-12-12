import React from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu"
import ItemView from "../components/ItemView";

const Order = () => {

    const selectedItems = [];

    const handleCardClick = (cardId) => {
        selectedItems.push(cardId)
        console.log(selectedItems);
    };

    return (
        <div>
            <ItemView />
            <Menu onClickCard={handleCardClick} />
            <Footer />
        </div>
    );
};

export default Order;
