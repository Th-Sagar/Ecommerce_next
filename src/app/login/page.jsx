import Image from "next/image";
import React from "react";

const login = () => {
  return (
    <section
      className="h-[86vh] w-full flex justify-center items-center bg-left-bottom  md:bg-right-top lg:bg-right-bottom"
      style={{
        backgroundImage: "url('/images/login.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize:"40rem",
       
       
      }}
    >
      <main className=" border shadow-xl py-16 rounded-xl w-[80%] md:w-[40%] 2xl:w-2/6">
        <h1 className="text-2xl font-bold text-center">Sign In</h1>
        <br />

        <hr className="mx-10" />

        <form className="mt-5 flex  justify-center items-center flex-col ">
          <div class="relative z-0 my-5">
            <input
              type="text"
              id="floating_standard"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-green-400 peer"
              placeholder=" "
            />
            <label
              for="Username"
              class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6  top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Username
            </label>
          </div>
          <br />

          <div class="relative z-0 my-5">
            <input
              type="text"
              id="floating_standard"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-green-400 peer"
              placeholder=" "
            />
            <label
              for="Password"
              class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6  top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Password
            </label>
          </div>

          <div className="mt-8">
            <button className="py-3 px-10  bg-green-400 transition-all duration-500 ease-in hover:text-green-400 hover:bg-white rounded-md">
              Login
            </button>
          </div>
          <br />
          <br />

          <div className="flex gap-1">
            <h1>Don't have Account?</h1>
            <span className="text-blue-600 cursor-pointer">SignUp</span>
          </div>
        </form>
      </main>
    </section>
  );
};

export default login;
