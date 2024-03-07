import React, { useState, useEffect } from 'react';

// Importing custom components and layouts
import Footer from "../components/Footer";
import OrderItemsView from '../layouts/OrderItemsView';
import ButtonGroup from "../layouts/ButtonGroup";
import Tabs from "../layouts/Tabs";
import OrderPageCards from "../layouts/OrderPageCards";
import { menuItems } from "../components/Data";

// Main functional component for the 'Order' page
const Order = () => {
    // State variables to manage selected items and filtered menu items
    const [selectedItems, setSelectedItems] = useState([]);
    const [filteredMenuItems, setFilteredMenuItems] = useState([]);

    // useEffect hook to update filteredMenuItems whenever selectedItems changes
    useEffect(() => {
        const updatedFilteredMenuItems = menuItems.filter(item => selectedItems.includes(item.id));
        setFilteredMenuItems(updatedFilteredMenuItems);
    }, [selectedItems]);

    // Handler function for card click to add selected items
    const handleCardClick = (cardId) => {
        if (!selectedItems.includes(cardId)) {
            setSelectedItems(prevSelectedItems => [...prevSelectedItems, cardId]);
        }
    };

    // Handler function to remove selected item
    const handleRemoveItem = (itemId) => {
        setSelectedItems((prevSelectedItems) =>
          prevSelectedItems.filter((item) => item !== itemId)
        );
    };

    // State variable and handler for managing active tab
    const [activeTab, setActiveTab] = useState(0);
    
    const handleTabChange = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div>
            {/* Displaying selected items and providing a way to remove them */}
            <OrderItemsView selected={filteredMenuItems} onRemoveItem={handleRemoveItem}/>
            
            {/* Main content of the 'Order' page */}
            <div className="min-h-screen flex flex-col justify-left items-left lg:px-32  pt-16" id="menu">
                <h1 className="font-bold text-[4rem] text-center md:text-left pl-[13.7rem]">Explore Our Menu!</h1>
                
                {/* Displaying tabs for different menu categories */}
                <div className="mt-8 pl-[13.7rem]">
                    <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
                </div>
                
                {/* Displaying cards based on the selected tab */}
                <OrderPageCards activeTab={activeTab} onClickCard={handleCardClick} />
            </div>
            
            {/* Displaying the footer component */}
            <Footer />
        </div>
    );
};

// Exporting the 'Order' component as the default export
export default Order;
