import React from "react";
import Card from "../layouts/Card";
import { menuItems } from "./Data";

const Cards = () => {
    return (
        <div className="section m-8" id="recipe">
            <div className="flex flex-col items-center">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">

                    { menuItems.map((item)=> {
                        return (
                               <Card name={item.name} price={item.price} description={item.description} img={item.img}/>
                        );
                    })}

                </div>
            </div>
        </div>
    );
};

export default Cards