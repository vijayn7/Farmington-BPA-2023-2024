import React from "react";
import FounderCard from "../layouts/FounderCard";
import { foundersData } from "../components/Data";

const Founders = () => {
    return (
        <div className="section border-t-2 border-black mb-24">
            <h1 className="font-bold text-6xl text-center mb-8 mt-16">Meet The Founders</h1>
            <div className="flex flex-col items-center">
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-[6rem]">
                    {foundersData.map((item) => {
                        return (
                            <FounderCard key={item.id} name={item.name} img={item.img} />
                        );
                    })}
                </div>
                <div className="bg-fillColor mt-16 mx-[40rem] rounded-lg text-s ">
                <h1 className="p-6 ">Topic: A new restaurant, Game Day Grill, has contracted your team to create a website for them. Your site must
include, but is not limited to: menus, online ordering and payment, special event listing, address and
contact information, and reservation information.</h1>
</div>
            </div>
        </div>
    );
};

export default Founders