import React, { useState } from 'react';
import ButtonGroup from "../layouts/ButtonGroup";
import Tabs from "../layouts/Tabs";
import Cards from "../layouts/Cards"

const Menu = ({ onClickCard }) => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const handleCardClick = (cardId) => {
        console.log("Card Clicked! Card ID:", cardId);
    };

    return (
        <div className="min-h-screen flex flex-col justify-left items-left lg:px-32  pt-16" id="menu">
            <h1 className="font-bold text-[4rem] text-center md:text-left pl-[13.7rem]">Explore Our Menu!</h1>
           
            <div className="mt-8 pl-[13.7rem]">
                <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
            </div>
            <Cards activeTab={activeTab} onClickCard={onClickCard || handleCardClick} />
        </div>
    );
};

export default Menu;
