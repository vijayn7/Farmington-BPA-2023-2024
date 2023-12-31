import React from "react";
import Store from "./Store";
import { locationData } from "../components/Data";

const Stores = () => {
    return (
        <div className="">
            {locationData.map((item) => {
                return (
                    <Store key={item.id} name={item.name} address={item.address} phone={item.phone}/>
                );
            })}
            <h1 className="text-center lg:text-left">*Reservations are accepted over the phone!</h1>
        </div>
    );
};

export default Stores;
