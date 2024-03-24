import React from "react";
import Countdown from "react-countdown";

const Timmer = () => {
  return (
    <div className=" max-w-screen-2xl  lg:mx-auto mx-5 md:mx-16 my-10">
      <h1 className="text-gray-400 text-3xl">Flash Sale</h1>
      <div className="flex justify-evenly items-center">
        <h4 className="text-lg font-semibold ">
          <span className="text-oranges mr-2">On Sale Now</span> Ending in{" "}
          <Countdown date={Date.now() + 100000000} />
        </h4>

        <button className="border p-4 border-oranges text-oranges">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Timmer;
