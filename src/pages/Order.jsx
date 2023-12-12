import React from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu"

const Order = () => {

    const selectedItems = [];

    const handleCardClick = (cardId) => {
        selectedItems.push(cardId)
        console.log(selectedItems);
    };

    return (
        <div>
            <Menu onClickCard={handleCardClick} />
            <Footer />
        </div>
    );
};

export default Order;
