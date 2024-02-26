import React from "react";
import Item from "./Item";

const OrderItemsView = (props) => {
    return (
        <>
            {props.selected.map((menuItem) => {
                return (
                    <Item key={menuItem.id} name={menuItem.itemName} />
                );
            })}
        </>
    );
};

export default OrderItemsView;