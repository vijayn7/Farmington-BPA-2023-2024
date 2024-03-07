import React, { useState } from 'react';
import ButtonGroup from "../layouts/ButtonGroup";
import Tabs from "../layouts/Tabs";
import HomePageCards from "../layouts/HomePageCards";

const Menu = ({ onClickCard }) => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState(0);

    // Handler to change the active tab
    const handleTabChange = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    // Handler for card click (you can replace the console.log with custom logic)
    const handleCardClick = (cardId) => {
        console.log("Card Clicked! Card ID:", cardId);
    };

    return (
        <div className="min-h-screen flex flex-col justify-left items-left lg:px-32 pt-16" id="menu">
            {/* Section Title */}
            <h1 className="font-bold text-4xl md:text-5xl text-center md:text-left pl-20">Explore Our Menu!</h1>

            {/* Button Group for Tabs */}
            <div className="mt-8 pl-20">
                <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
            </div>

            {/* Display Menu Cards based on Active Tab */}
            <HomePageCards activeTab={activeTab} onClickCard={onClickCard || handleCardClick} />
        </div>
    );
};

export default Menu;