import React, { useState } from 'react';

// ButtonGroup component for displaying a group of buttons
const ButtonGroup = () => {
  // State to track the active button
  const [activeButton, setActiveButton] = useState('button1');

  // Function to handle button click and update the active button
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="hidden md:flex font-bold">
      <div>
        {/* Button for Food */}
        <button
          className={`px-4 py-2 ${activeButton === 'button1' ? 'bg-secondary' : 'bg-primary'}`}
          onClick={() => handleButtonClick('button1')}
        >
          Food
        </button>

        {/* Button for Drinks */}
        <button
          className={`px-4 py-2 ${activeButton === 'button2' ? 'bg-secondary' : 'bg-primary'}`}
          onClick={() => handleButtonClick('button2')}
        >
          Drinks
        </button>
      </div>
    </div>
  );
};

export default ButtonGroup;