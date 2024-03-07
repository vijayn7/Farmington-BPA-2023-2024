import React from "react";

// Button component for rendering a styled button
const Button = (props) => {
  return (
    <div>
      {/* Button with styling based on provided props */}
      <button
        className="cursor-pointer px-6 py-1 border-4 border-primary text-lightText hover:bg-brightColor hover:text-white transition-all duration-300 rounded-full text-3xl hover:bg-primary"
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
