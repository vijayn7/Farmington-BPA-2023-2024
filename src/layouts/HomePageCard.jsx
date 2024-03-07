import React from "react";
import { Link } from "react-router-dom";

// Card component for displaying individual menu items
const Card = (props) => {
  // Handle click event when the card is clicked
  const handleClick = () => {
    props.onClickCard(props.id);
  };

  // Scroll to the top of the page with smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div onClick={handleClick} className="max-w-sm transition-all duration-300 cursor-pointer rounded-lg outline outline-1 hover:bg-fillColor">
      {/* Display the item image */}
      <img src={props.img} alt="" className="rounded-t-lg mb-4 w-96 h-64 object-cover" />

      <div className="flex justify-between mb-1.5">
        {/* Display the item name */}
        <div className="md:text-2xl text-[1rem] font-semibold pl-4">
          {props.name}
        </div>
      </div>

      {/* Display the item description */}
      <p className="text-[0.85rem] opacity-70 mb-4 px-4 pt-0.5">
        {props.description}
      </p>

      <div className="items-center justify-center mb-6 grid grid-cols-2 pl-10 space-x-10">
        {/* Link to the order page and scroll to the top on click */}
        <Link to="/order" onClick={scrollToTop}>
          <button className="bg-transparent hover:bg-[#EAA800] text-[#EAA800] font-semibold hover:text-white py-2 px-4 border border-[#EAA800] hover:border-transparent rounded-full">
            Begin Your Order
          </button>
        </Link>

        {/* Display the item price */}
        <h1 className="text-gray-600 text-lg">${props.price}</h1>
      </div>
    </div>
  );
};

export default Card;