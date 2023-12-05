import React from "react";
import Store from "./store";
import { locationData } from "../components/Data";

const Stores = () => {
    return (
        <div className="">
            {locationData.map((item) => {
                return (
                    <Store name={item.name} address={item.address} phone={item.phone}/>
                );
            })}
            <h1>*Reservations are accepted over the phone!</h1>
        </div>
    );
};

export default Stores;