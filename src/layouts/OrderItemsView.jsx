import React, { useState } from "react";
import Item from "./Item";
import { FaDribbble, FaXmark } from "react-icons/fa6";

const OrderItemsView = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    function getsubtotal() {
        let subtotal = 0.00;
        for (let i = 0; i < props.selected.length; i++) {
            subtotal += parseFloat(props.selected[i].price);
        }
        return subtotal;
    }

    const handleXmarkClick = () => {
        setIsVisible(false);
    };

    const handleOpenButtonClick = () => {
        setIsVisible(!isVisible);
    }

    return (
        <>

            <section class="fixed pt-14 z-20 pl-0 " id="filter-btn" onClick={handleOpenButtonClick}>
                <button class="transition-colors w-[100%] text-lg text-black bg-primary py-4 pr-6 pl-2 rounded-r-3xl hover:bg-secondary hover:text-white">Open Cart</button>
            </section>

            {isVisible && (
                <div className="flex flex-col overflow-scroll justify-between w-[24vw] top-0 right-0 bottom-0 bg-white h-[100vh] fixed z-50 rounded-tl-[2rem] border-black border-l-[1px] border-t-[1px]">
                    <div>
                        <FaXmark className="text-2xl ml-auto mr-12 mt-12" onClick={handleXmarkClick} />
                        <h1 className="text-l font-bold text-left ml-8 mt-8">Review Your Cart</h1>
                        {props.selected.length > 0 ? (
                            props.selected.map((menuItem) => (
                                <Item key={menuItem.id} name={menuItem.itemName} price={menuItem.price} img={menuItem.img} />
                            ))
                        ) : (
                            <div className="text-sm text-left ml-8 mt-4">Please selected an Item</div>
                        )}

                        <hr className="w-[22vw] h-0.5 bg-gray-300 mt-8 mx-auto"></hr>
                        <div className="flex justify-between">
                            <h1 className="mt-6 ml-8"> Subtotal</h1>
                            <h1 className="text-sm justify-self-end font-regular text-gray-600 mr-5 mt-6 ">${(Math.round(getsubtotal() * 100) / 100).toFixed(2)}</h1>
                        </div>
                    </div>
                    <button className="mx-20 mb-12 mt-12 h-16 align-bottom bottom-0 bg-transparent hover:bg-[#EAA800] text-[#EAA800] font-semibold hover:text-white py-2 px-4 border border-[#EAA800] hover:border-transparent rounded-full ">Checkout</button>
                </div>
            )}
        </>
    );
};

export default OrderItemsView;
