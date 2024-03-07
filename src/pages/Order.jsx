import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import OrderItemsView from '../layouts/OrderItemsView';
import ButtonGroup from "../layouts/ButtonGroup";
import Tabs from "../layouts/Tabs";
import OrderPageCards from "../layouts/OrderPageCards";
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
        // console.log(selectedItems);
    };

    const handleRemoveItem = (itemId) => {
        setSelectedItems((prevSelectedItems) =>
          prevSelectedItems.filter((item) => item !== itemId)
        );
      };

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div>
            <OrderItemsView selected={filteredMenuItems} onRemoveItem={handleRemoveItem}/>
            <div className="min-h-screen flex flex-col justify-left items-left lg:px-32  pt-16" id="menu">
            <h1 className="font-bold text-[4rem] text-center md:text-left pl-[13.7rem]">Explore Our Menu!</h1>
           
            <div className="mt-8 pl-[13.7rem]">
                <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
            </div>
                <OrderPageCards activeTab={activeTab} onClickCard={handleCardClick} />
            </div>
            <Footer />
        </div>
    );
};

export default Order;