import React, { useState } from "react";

const Card = (props) => {
  const [addedToOrder, setAddedToOrder] = useState(false);

  const handleClick = () => {
    props.onClickCard(props.id);
    setAddedToOrder(false);
    setAddedToOrder(true);

    // Hide the notification after a short delay (e.g., 3 seconds)
    setTimeout(() => {
      setAddedToOrder(false);
    }, 2000);
  };

  return (
    <div className="max-w-sm transition-all duration-300 cursor-pointer rounded-lg outline outline-1 hover:bg-fillColor">
      <img
        src={props.img}
        alt=""
        className="rounded-t-lg mb-4 w-96 h-64 object-cover"
      />
      <div className="flex justify-between mb-1.5">
        <div className="md:text-2xl text-[1rem] font-semibold pl-4">
          {props.name}
        </div>
      </div>
      <p className="text-[0.85rem] opacity-70 mb-4 px-4 pt-0.5">
        {props.description}
      </p>
      <div className="flex items-center justify-center mb-6 space-x-36">
        <button
          onClick={handleClick}
          className="bg-transparent hover:bg-[#EAA800] text-[#EAA800] font-semibold hover:text-white py-2 px-4 border border-[#EAA800] hover:border-transparent rounded-full"
        >
          Add to Order
        </button>
        <h1 className="text-gray-600 text-lg">${props.price}</h1>
      </div>
      {addedToOrder ? (
        <div className="bg-[#EAA800] text-white px-4 py-2 rounded-md fixed top-8 right-4 z-50 animate-bounce">
          Item added to your order!
        </div>
      ) : null}
    </div>
  );
};

export default Card;
