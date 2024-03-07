import React from "react";

const Mission = () => {
    return (
        <div className="pt-16 pb-12 md:pl-16 flex flex-col items-center">
            {/* Section Title */}
            <h1 className="font-bold text-6xl md:text-7xl pb-6">Our Mission</h1>

            {/* Mission Statement */}
            <div className="bg-fillColor md:w-[70%] text-xl md:text-2xl lg:text-4xl p-4 rounded-[2rem] my-8 md:my-10 border border-black outline-offset-8">
                Game Day Grill is where sports and great food collide. Our goal is simple: to be your ultimate game day destination, serving up delicious bites and a vibrant atmosphere. Join us to savor the game, one delicious dish at a time.
            </div>
        </div>
    );
};

export default Mission;
