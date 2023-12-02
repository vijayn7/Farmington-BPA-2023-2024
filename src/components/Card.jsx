import React from "react";
import img1 from "../assets/img/img1.jpg";

const Card = (props) => {
    return (
        <div className="max-w-sm p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer rounded-lg bg-fillColor hover:outline outline-1">
            <img src={img1} alt="" className="rounded-lg mb-4" />
            <div className="flex justify-between mb-4">
                <div className="md:text-xl text-[1rem] font-semibold">
                    {props.name}
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[1.35rem]">${props.price}</span>
                </div>
            </div>
            <p className="text-[0.85rem] opacity-70 mb-4">
                {props.description}
            </p>
        </div>
    );
};

export default Card;