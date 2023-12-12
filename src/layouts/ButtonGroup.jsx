import React, { useState } from 'react';

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState('button1');

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="hidden md:flex font-bold">
        <div>
      <button
        className={`px-4 py-2 ${activeButton === 'button1' ? 'bg-secondary' : 'bg-primary'}`}
        onClick={() => handleButtonClick('button1')}
      >
        Food
      </button>
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