import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/home.png')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-bold text-8xl">
          GAME DAY GRILL
        </h1>
        <p className=" text-backgroundColor">
          Slogan
        </p>
        <div className=" lg:pl-44">
          <Button title="View Menu" />
        </div>
      </div>
    </div>
  );
};

export default Home;