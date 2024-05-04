"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  const handleShow = () => {
    gsap.to("#hideSearch", {
      opacity: 0,
      duration: 0.1,
      ease: "power4.out",
    });
    gsap.to("#searchitem", {
      opacity: 1,
      delay: 0.3,
      ease: "power4.out",
    });
  };

  useGSAP(() => {
    gsap.to("#logo", {
      x: 40,
      duration: 2,
    });
  }, []);

  return (
    <>
      <section id="top" className="bg-oranges text-white sticky top-0 z-10">
        <nav className="flex items-center sm:justify-around gap-2 sm:gap-0">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              className="right-10"
              id="logo"
              alt="logo"
              width={80}
              height={80}
            />
          </Link>
          <ul className="flex gap-2 sm:gap-16 justify-center items-center">
            <div
              id="searchitem"
              className="flex justify-center opacity-0  items-center  "
            >
              <input
                type="text"
                className="rounded-xl py-2 pl-3 w-full text-black outline-none p-1 "
                placeholder="Enter any thing to search..."
              />
              <FaSearch
                className="ml-2 cursor-pointer  hover:scale-105 transition-all duration-200 ease-in"
                size={16}
              />
            </div>

            <div onClick={handleShow}>
              <FaSearch
                id="hideSearch"
                className="ml-2 cursor-pointer   hover:scale-105 transition-all duration-200 ease-in"
                size={16}
              />
            </div>

            <div className="flex gap-1 sm:gap-4">
              <button className=" py-3 px-4 shadow-md hover:shadow-inner transition-all duration-500 ease-in  rounded-md  ">
                <Link href={"/login"}>Login</Link>
              </button>

              <button className="py-3 px-4 shadow-md hover:shadow-inner transition-all  duration-500 ease-in  rounded-md  ">
                <Link href={"/signup"}>Signup</Link>
              </button>

              <div className=" flex justify-center items-center relative">
                <Link href={"/Cart"}>
                  <LuShoppingCart size={25} />
                </Link>

                <div className=" absolute right-0 top-0 bg-transparent opacity-85 bg-white  text-black rounded-[50%] px-1 ">
                  <p>
                    2
                  </p>
                </div>
              </div>
            </div>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
