import React, { useState } from "react";

// Card component for displaying individual menu items with interaction
const Card = (props) => {
  // State to track whether the item is added to the order and display a notification
  const [addedToOrder, setAddedToOrder] = useState(false);

  // Click handler for adding the item to the order
  const handleClick = () => {
    // Callback to parent component to handle the click
    props.onClickCard(props.id);

    // Reset and set addedToOrder to true
    setAddedToOrder(false);
    setAddedToOrder(true);

    // Hide the notification after a short delay (e.g., 2 seconds)
    setTimeout(() => {
      setAddedToOrder(false);
    }, 1250);
  };

  return (
    <div className="max-w-sm transition-all duration-300 cursor-pointer rounded-lg outline outline-1 hover:bg-fillColor">
      {/* Image */}
      <img
        src={props.img}
        alt=""
        className="rounded-t-lg mb-4 w-96 h-64 object-cover"
      />

      {/* Item details */}
      <div className="flex justify-between mb-1.5">
        <div className="md:text-2xl text-[1rem] font-semibold pl-4">
          {props.name}
        </div>
      </div>
      <p className="text-[0.85rem] opacity-70 mb-4 px-4 pt-0.5">
        {props.description}
      </p>

      {/* Action buttons and price */}
      <div className="items-center justify-center mb-6 grid grid-cols-2 pl-10 space-x-10">
        {/* Add to Order button */}
        <button
          onClick={handleClick}
          className="bg-transparent hover:bg-[#EAA800] text-[#EAA800] font-semibold hover:text-white py-2 px-4 border border-[#EAA800] hover:border-transparent rounded-full"
        >
          Add to Order
        </button>

        {/* Price */}
        <h1 className="text-gray-600 text-lg">${props.price}</h1>
      </div>

      {/* Notification for item added to order */}
      {addedToOrder ? (
        <div className="bg-[#EAA800] text-white px-4 py-2 rounded-md fixed top-8 right-4 z-50 animate-bounce">
          Item added to your order!
        </div>
      ) : null}
    </div>
  );
};

// Exporting the Card component as the default export
export default Card;