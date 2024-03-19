"use client"
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {

  const params = useParams()
  console.log(params)

  

  return (
    <>
      <section className="bg-green-400 ">
        <nav className="flex items-center justify-evenly">
          <Link href={"/"}>
            <Image src="/logo.png" alt="logo" width={48} height={48} />
          </Link>
          <ul className="flex gap-16">
            <div className="flex justify-center items-center">
              <input
                type="text"
                className="rounded-xl pl-3 outline-none p-1 "
                placeholder="Enter any thing to search..."
              />
              <FaSearch
                className="ml-2 hover:scale-105 transition-all duration-200 ease-in"
                size={16}
              />
            </div>

            <div className="flex gap-4">
              <button className=" py-3 px-4 hover:text-white hover:shadow-inner transition-all duration-300 ease-in font-semibold">
                <Link href={"/login"}>Login</Link>
              </button>

              <button className="py-3 px-4 hover:text-white hover:shadow-inner transition-all duration-300 ease-in font-semibold">
                <Link href={"/signup"}>Signup</Link>
              </button>
            </div>


            <div>

            </div>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
