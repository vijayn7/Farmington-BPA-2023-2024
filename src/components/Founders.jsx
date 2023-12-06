import React from "react";
import FounderCard from "../layouts/FounderCard";
import { foundersData } from "../components/Data";

const Founders = () => {
    return (
        <div className="section border-t-2 border-black mb-16">
            <h1 className="font-bold text-6xl text-center my-8">Meet The Founders</h1>
            <div className="flex flex-col items-center">
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-[6rem]">
                    {foundersData.map((item) => {
                        return (
                            <FounderCard key={item.id} name={item.name} img={item.img} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Founders