import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="border-b-2 border-black min-h-[90vh] flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/home.png')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-lightText font-bold text-7xl absolute top-[46rem] left-5">
          Game On, Grill On
        </h1>
        <div className="lg:pl-44 absolute top-[46rem] right-5">
          <a href="#menu">
            <Button title="View Menu" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
