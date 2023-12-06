import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="w-full border-b-2 border-black h-[40vh] md:h-[80vh] flex flex-row justify-between items-center lg:px-32 bg-[url('./assets/img/home.png')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-lightText font-bold text-4xl md:text-[8rem] lg:text-7xl text-center lg:absolute lg:top-[75vh] lg:left-5">
          Game On, Grill On
        </h1>
        <div className="lg:pl-44 text-center lg:absolute lg:top-[75vh] lg:right-5">
          <a href="#menu">
            <Button title="View Menu" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;