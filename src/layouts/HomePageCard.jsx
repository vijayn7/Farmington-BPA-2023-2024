import React from "react";
import { Link, Outlet } from "react-router-dom";

const Card = (props) => {

    const handleClick = () => {
        props.onClickCard(props.id);
    };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return (
        <div onClick={handleClick} className="max-w-sm   transition-all duration-300 cursor-pointer rounded-lg outline outline-1 hover:bg-fillColor">
            <img src={props.img} alt="" className="rounded-t-lg mb-4 w-96 h-64 object-cover" />
            <div className="flex justify-between mb-1.5">
                <div className="md:text-2xl text-[1rem] font-semibold pl-4">
                    {props.name}
                </div>

            </div>
            <p className="text-[0.85rem] opacity-70 mb-4 px-4 pt-0.5">
                {props.description}
            </p>
            <div className="flex items-center justify-center mb-6">
                <Link to="/order" onClick={scrollToTop}><button className=" bg-transparent hover:bg-[#EAA800] text-[#EAA800] font-semibold hover:text-white py-2 px-4 border border-[#EAA800] hover:border-transparent rounded-full ">Begin Your Order</button></Link>
            </div>
        </div>
    );
};

export default Card;