import React from "react";

const Item = (props) => {
  return (
    <>
      <div>
        <div className="flex justify-between mt-10 ">
          <div className="flex">
            <img src={props.img} className="rounded-full overflow-hidden w-12 h-12 object-cover ml-8 " />
            <h1 className="text-m font-semibold ml-5  mt-2">{props.name}</h1>
          </div>
          <h1 className="text-sm justify-self-end font-regular text-gray-600 mr-5 mt-2 ">${props.price}</h1>
        </div>
      </div>
      
    </>
  );
};

export default Item;