import React from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu"

const Order = () => {

    const handleCardClick = (cardId) => {
        console.log("Card Clicked in Order! Card ID:", cardId);
    };

    return (
        <div>
            <Menu onClickCard={handleCardClick} />
            <Footer />
        </div>
    );
};

export default Order;
