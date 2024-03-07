import React from "react";

// Importing the individual Store component and locationData from the Data file
import Store from "./Store";
import { locationData } from "../components/Data";

// Component to display a list of stores using the Store component
const Stores = () => {
    return (
        <div className="">
            {/* Mapping through locationData to render Store components */}
            {locationData.map((item) => {
                return (
                    <Store key={item.id} name={item.name} address={item.address} phone={item.phone}/>
                );
            })}
            
            {/* Information about reservations */}
            <h1 className="text-center lg:text-left">*Reservations are accepted over the phone!</h1>
        </div>
    );
};

// Exporting the Stores component as the default export
export default Stores;