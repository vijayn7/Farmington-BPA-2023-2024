import React from "react";
import Item from "./Item";
import { FaXmark } from "react-icons/fa6";



const OrderItemsView = (props) => {
    return (
        <>
            <div className=" flex flex-col  justify-between w-[24vw] top-0 right-0 bottom-0 bg-white h-[100vh] fixed z-50 rounded-tl-[2rem] border-black border-l-[1px] border-t-[1px]">
                <div>
                    <FaXmark className="text-2xl ml-auto mr-12 mt-12" />
                    <h1 className="text-l font-bold text-left ml-8 mt-8">Review Your Cart</h1>
                    {props.selected.map((menuItem) => {
                        return (
                            <Item key={menuItem.id} name={menuItem.itemName} price={menuItem.price} img={menuItem.img} />


                        );
                    })}
                    <hr className="w-[22vw] h-0.5 bg-gray-300 mt-8 mx-auto"></hr>
                    <div className="flex justify-between">
                        <h1 className="mt-6 ml-8"> Subtotal</h1>
                        <h1 className="text-sm justify-self-end font-regular text-gray-600 mr-5 mt-6 ">$14.99</h1>
                    </div>
                </div>
<button className=" mx-20 mb-12 h-16 align-bottom bottom-0 bg-transparent hover:bg-[#EAA800] text-[#EAA800] font-semibold hover:text-white py-2 px-4 border border-[#EAA800] hover:border-transparent rounded-full ">Checkout</button>
            </div>

        </>
    );
};

export default OrderItemsView;