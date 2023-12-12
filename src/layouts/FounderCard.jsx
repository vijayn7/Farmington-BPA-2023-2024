import React from "react";

const FounderCard = (props) => {
    return (
        <div className="text-center max-w-md p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer rounded-lg bg-fillColor hover:outline outline-1">
            <h1 className="font-bold text-2xl pb-3">{props.name}</h1>
            <img src={props.img} alt="" className="rounded-lg mb-4 w-96 h-[30rem] object-cover" />
            <div className="text-xl">
                <p>Farmington BPA</p>
                <p>Farmington High School</p>
                <p>Farmington Hills, MI</p>
                <p>2023-2024</p>
            </div>
        </div>
    );
};

export default FounderCard;