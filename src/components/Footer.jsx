"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";

const Footer = () => {
  const [electronic, setElectronic] = useState(false);
  const [mens, setMens] = useState(false);

  const pathname = usePathname();

  const showElectronics = () => {
    setElectronic((pre) => !pre);
    setMens(false);
  };

  const showMens = () => {
    setMens((pre) => !pre);
    setElectronic(false);
  };

  const closeSideBar = () => {
    setElectronic(false);
    setMens(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("sidebar");

      if (sidebar && !sidebar.contains(event.target)) {
        setElectronic(false);
        setMens(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <section className="bg-green-400 text-center p-2 ">
        <div className="flex justify-evenly items-center">
          <Link href={"/"}>
            <Image src="/logo.png" alt="logo" width={80} height={80} />
          </Link>

          <ul className="grid grid-cols-3 place-items-center gap-x-10">
            <li onClick={closeSideBar}>
              <Link
                href={"/LifeStyle"}
                className={`${pathname === "/LifeStyle" ? "text-red-500" : ""}`}
              >
                Life Style
              </Link>
            </li>

            <li onClick={closeSideBar} className="mb-2">
              <Link
                href={"/HomeAppliances"}
                className={`${
                  pathname === "/HomeAppliances" ? "text-red-500" : ""
                }`}
              >
                Home Appliances
              </Link>
            </li>

            <li onClick={closeSideBar}>
              <Link
                href={"/HealthBeauty"}
                className={`${
                  pathname === "/HealthBeauty" ? "text-red-500" : ""
                }`}
              >
                Health & Beauty
              </Link>
            </li>

            <li onClick={closeSideBar} className="mb-2">
              <Link
                href={"/Formal"}
                className={`${pathname === "/Formal" ? "text-red-500" : ""}`}
              >
                Formal
              </Link>
            </li>

            <li onClick={closeSideBar} className="mb-2">
              <Link
                href={"/SemiFormal"}
                className={`${
                  pathname === "/SemiFormal" ? "text-red-500" : ""
                }`}
              >
                Semi Formal
              </Link>
            </li>

            <li onClick={closeSideBar}>
              <Link
                href={"/Casual"}
                className={`${pathname === "/Casual" ? "text-red-500" : ""}`}
              >
                Casual
              </Link>
            </li>

            <li onClick={closeSideBar}>
              <Link
                href={"/WomensFashion"}
                className={`${
                  pathname === "/WomensFashion" ? "text-red-500" : ""
                }`}
              >
                Womens Fashion
              </Link>
            </li>
            <li onClick={closeSideBar}>
              <Link
                href={"/Sports"}
                className={`${pathname === "/Sports" ? "text-red-500" : ""}`}
              >
                Sports
              </Link>
            </li>
            <li onClick={closeSideBar}>
              <Link
                href={"/Groceries"}
                className={`${pathname === "/Groceries" ? "text-red-500" : ""}`}
              >
                Groceries
              </Link>
            </li>
          </ul>

          
        </div>

        <hr className="mx-20"/>
        <h1 className="my-5">All rights reserved &copy; {new Date().getFullYear()}</h1>
      </section>
    </>
  );
};

export default Footer;
