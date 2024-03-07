import React from "react";

// Importing individual OrderPageCard component and menuItems from the Data file
import Card from "./OrderPageCard";
import { menuItems } from "../components/Data";

// OrderPageCards component for displaying menu items based on the selected category
const OrderPageCards = ({ activeTab, onClickCard }) => {
    // Define category options and get the selected category
    const tabOptions = ["All", "Appetizer", "Entrees", "Soup & Salad", "Sides", "Dessert"];
    const selectedOption = tabOptions[activeTab];

    // Filter menu items based on the selected category
    const filteredItems = selectedOption === "All" ? menuItems : menuItems.filter(item => item.category === selectedOption);

    return (
        <div className="section m-8">
            {/* Container for displaying filtered menu items */}
            <div className="flex flex-col items-center">
                {/* Grid layout for displaying menu cards */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
                    {/* Mapping through filtered items to render Card components */}
                    {filteredItems.map((item) => {
                        return (
                            <Card key={item.id} id={item.id} name={item.itemName} price={item.price} description={item.description} img={item.img} onClickCard={onClickCard} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// Exporting the OrderPageCards component as the default export
export default OrderPageCards;