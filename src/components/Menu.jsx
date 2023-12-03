import React from "react";
import ButtonGroup from "../layouts/ButtonGroup";
import Tabs from "../layouts/Tabs";
import Cards from "../layouts/Cards"

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-left items-left lg:px-32 px-5">
      <h1 className="text-[6rem]">Menu</h1>
      <ButtonGroup />
      <div className="mt-8">
      <Tabs/>
      </div>
      <Cards />
    </div>
  );
};

export default Menu;
