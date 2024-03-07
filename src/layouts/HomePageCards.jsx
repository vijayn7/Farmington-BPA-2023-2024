import React from "react";
import Card from "./HomePageCard";
import { menuItems } from "../components/Data";

// Cards component for displaying menu items based on the selected tab
const Cards = ({ activeTab, onClickCard }) => {
  // Options for the tabs
  const tabOptions = ["All", "Appetizer", "Entrees", "Soup & Salad", "Sides", "Dessert"];
  
  // Get the selected tab option
  const selectedOption = tabOptions[activeTab];

  // Filter items based on the selected tab
  const filteredItems = selectedOption === "All" ? menuItems : menuItems.filter(item => item.category === selectedOption);

  return (
    <div className="section m-8">
      <div className="flex flex-col items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {/* Map through filtered items and display each as a Card */}
          {filteredItems.map((item) => (
            <Card key={item.id} id={item.id} name={item.itemName} price={item.price} description={item.description} img={item.img} onClickCard={onClickCard} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;