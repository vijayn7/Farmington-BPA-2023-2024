import React from "react";
import Store from "./store";
import { locationData } from "../components/Data";

const Stores = () => {
    return (
        <div className="m-64">
            {locationData.map((item) => {
                return (
                    <Store name={item.name} address={item.address} phone={item.phone}/>
                );
            })}
        </div>
    );
};

export default Stores;