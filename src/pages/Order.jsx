import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import Item from "../layouts/Item";
import ButtonGroup from "../layouts/ButtonGroup";
import Tabs from "../layouts/Tabs";
import Cards from "../layouts/Cards";
import { menuItems } from "../components/Data";

const Order = () => {

    const [selectedItems, setSelectedItems] = useState([]);
    const [filteredMenuItems, setFilteredMenuItems] = useState([]);

    useEffect(() => {
        // Update filteredMenuItems whenever selectedItems changes
        const updatedFilteredMenuItems = menuItems.filter(item => selectedItems.includes(item.id));
        setFilteredMenuItems(updatedFilteredMenuItems);
    }, [selectedItems]);

    const handleCardClick = (cardId) => {
        if (!selectedItems.includes(cardId)) {
            // Use set function to update state and trigger re-render
            setSelectedItems(prevSelectedItems => [...prevSelectedItems, cardId]);
        }
        console.log(selectedItems);
    };

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div>
            {filteredMenuItems.map((menuItem) => {
                return (
                    <Item key={menuItem.id} name={menuItem.itemName} />
                );
            })}
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