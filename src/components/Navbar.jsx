"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <section className="bg-green-400 ">
        <nav className="flex items-center sm:justify-evenly gap-2 sm:gap-0">
          <Link href={"/"}>
            <Image src="/logo.png"  alt="logo" width={80} height={80} />
          </Link>
          <ul className="flex gap-2 sm:gap-16">
            <div className="flex justify-center items-center">
              <input
                type="text"
                className="rounded-xl py-2 pl-3 w-full outline-none p-1 "
                placeholder="Enter any thing to search..."
              />
              <FaSearch
                className="ml-2  hover:scale-105 transition-all duration-200 ease-in"
                size={16}
              />
            </div>

            <div className="flex gap-1 sm:gap-4">
              <button className=" py-3 px-4 hover:text-white hover:shadow-inner transition-all duration-500 ease-in  rounded-md hover:bg-green-600 ">
                <Link href={"/login"}>Login</Link>
              </button>

              <button className="py-3 px-4 hover:text-white hover:shadow-inner transition-all hover:bg-green-600 duration-500 ease-in  rounded-md  ">
                <Link href={"/signup"}>Signup</Link>
              </button>
            </div>

            
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
