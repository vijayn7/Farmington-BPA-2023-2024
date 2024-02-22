import React, { useState } from 'react';
import Footer from "../components/Footer";
import ItemView from "../components/ItemView";
import ButtonGroup from "../layouts/ButtonGroup";
import Tabs from "../layouts/Tabs";
import Cards from "../layouts/Cards";

const Order = () => {

    const selectedItems = [];

    const handleCardClick = (cardId) => {
        if (!selectedItems.includes(cardId))
            selectedItems.push(cardId);
        console.log(selectedItems);
    };

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div>
            <ItemView />
            <div className="min-h-screen flex flex-col justify-left items-left lg:px-32 px-5 pt-20" id="menu">
                <h1 className="text-[6rem] text-center md:text-left">Menu</h1>
                <ButtonGroup />
                <div className="mt-8">
                    <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
                </div>
                <Cards activeTab={activeTab} onClickCard={handleCardClick} />
            </div>
            <Footer />
        </div>
    );
};

export default Order;
