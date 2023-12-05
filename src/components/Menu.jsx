import React, { useState } from 'react';
import ButtonGroup from "../layouts/ButtonGroup";
import Tabs from "../layouts/Tabs";
import Cards from "../layouts/Cards"

const Menu = () => {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="min-h-screen flex flex-col justify-left items-left lg:px-32 px-5 pt-20" id="menu">
      <h1 className="text-[6rem]">Menu</h1>
      <ButtonGroup />
      <div className="mt-8">
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
      <Cards activeTab={activeTab} />
    </div>
  );
};

export default Menu;
