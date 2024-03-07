import React, { useState } from 'react';

// Individual tab component
const Tab = ({ label, isActive, onClick }) => {
  // Determine the underline color based on the tab's activity
  const underlineColor = isActive ? 'border-primary bg-[#f9f4dd]' : 'border-transparent';

  return (
    <div
      className={`underline-tab px-1 py-2 mr-4 border-b-2 ${underlineColor}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

// Tabs component for managing and displaying tab items
const Tabs = ({ activeTab, onTabChange }) => {
  // Handler function for tab click event
  const handleTabClick = (tabNumber) => {
    onTabChange(tabNumber);
  };

  return (
    <div className="hidden md:flex">
      {/* Container for displaying individual tabs */}
      <div className='flex rounded-lg'>
        {/* Individual tabs for different categories */}
        <Tab
          label="All"
          isActive={activeTab === 0}
          onClick={() => handleTabClick(0)}
        />
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
          label="Dessert"
          isActive={activeTab === 5}
          onClick={() => handleTabClick(5)}
        />
      </div>
    </div>
  );
};

// Exporting the Tabs component as the default export
export default Tabs;
