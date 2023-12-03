import React, { useState } from 'react';

const Tab = ({ label, isActive, onClick }) => {
  const underlineColor = isActive ? 'border-blue-500' : 'border-transparent';

  return (
    <div
      className={`underline-tab px-4 py-2 mr-4 border-b-2 ${underlineColor}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="flex">
      <Tab
        label="Appetizers"
        isActive={activeTab === 1}
        onClick={() => handleTabClick(1)}
      />
      <Tab
        label="Entrees"
        isActive={activeTab === 2}
        onClick={() => handleTabClick(2)}
      />
      <Tab
        label="Soups and Salads"
        isActive={activeTab === 3}
        onClick={() => handleTabClick(3)}
      />
      <Tab
        label="Sides"
        isActive={activeTab === 4}
        onClick={() => handleTabClick(4)}
      />
      <Tab
        label="Deserts"
        isActive={activeTab === 5}
        onClick={() => handleTabClick(5)}
      />
    </div>
  );
};

export default Tabs;
