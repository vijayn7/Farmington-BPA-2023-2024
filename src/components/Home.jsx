import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="w-full border-b-2 border-black h-[40vh] md:h-[80vh] flex flex-row justify-between items-center lg:px-32 bg-[url('./assets/img/home.png')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5 pl-24">
        <div className="bg-black w-[34rem] h-[265px] bg-opacity-[80%]">
              <h1 className="font-bold text-white text-7xl pt-5 pl-4">Game On, Grill On!</h1>
              <p className="text-gray-300 text-2xl pl-4 pt-3">Explore our wide selection of dishes to find your perfect meal for the big game!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;