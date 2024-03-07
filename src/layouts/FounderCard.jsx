import React from "react";

// FounderCard component for displaying information about a founder
const FounderCard = (props) => {
    return (
        <div className="text-center max-w-md p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer rounded-lg bg-fillColor hover:outline outline-1">
            {/* Display founder's name */}
            <h1 className="font-bold text-2xl pb-3">{props.name}</h1>

            {/* Display founder's image */}
            <img src={props.img} alt="" className="rounded-lg mb-4 w-96 h-[30rem] object-cover" />

            <div className="text-xl">
                {/* Display additional information about the founder */}
                <p>Farmington BPA</p>
                <p>Farmington High School</p>
                <p>Farmington Hills, MI</p>
                <p>2023-2024</p>
            </div>
        </div>
    );
};

export default FounderCard;