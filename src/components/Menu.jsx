import React from "react";
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
        <div className="min-h-screen flex flex-col justify-left items-left lg:px-32 px-5 pt-20" id="menu">
            <h1 className="text-[6rem] text-center md:text-left">Menu</h1>
            <ButtonGroup />
            <div className="mt-8">
                <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
            </div>
            <Cards activeTab={activeTab} onClickCard={onClickCard || handleCardClick} />
        </div>
    );
};

export default Menu;
