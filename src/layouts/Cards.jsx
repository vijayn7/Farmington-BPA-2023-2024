import React from "react";
import Card from "./Card";
import { menuItems } from "../components/Data";

const Cards = ({ activeTab }) => {
    const tabOptions = ["All", "Appetizer", "Entrees", "Soup & Salad", "Sides", "Dessert"];
    const selectedOption = tabOptions[activeTab];

    const filteredItems = selectedOption === "All" ? menuItems : menuItems.filter(item => item.category === selectedOption);
    return (
        <div className="section m-8" id="recipe">
            <div className="flex flex-col items-center">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">

                    {filteredItems.map((item) => {
                        return (
                            <Card key={item.id} name={item.itemName} price={item.price} description={item.description} img={item.img} />
                        );
                    })}

                </div>
            </div>
        </div>
    );
};

export default Cards