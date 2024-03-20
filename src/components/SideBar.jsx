"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";

const SideBar = () => {
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
      <section
        id="sidebar"
        className="hidden sm:flex max-w-screen-2xl  justify-center items-center relative mt-1"
      >
        <ul className="flex gap-16 justify-center items-center">
          <li>
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={showElectronics}
                className={`${
                  pathname === "/HomeAppliances" || pathname === "/LifeStyle"
                    ? "text-red-500"
                    : ""
                }`}
              >
                Electronics
              </button>
              {electronic ? <IoMdArrowDropup /> : <FaCaretDown />}
            </div>

            {electronic && (
              <ul className="absolute top-6 shadow-lg rounded-lg border bg-white p-5 z-10">
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
                    href={"/LifeStyle"}
                    className={`${
                      pathname === "/LifeStyle" ? "text-red-500" : ""
                    }`}
                  >
                    Life Style
                  </Link>
                </li>
              </ul>
            )}
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

          <li>
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={showMens}
                className={`${
                  pathname === "/Formal" ||
                  pathname === "/SemiFormal" ||
                  pathname === "/Casual"
                    ? "text-red-500"
                    : ""
                }`}
              >
                Mens Fashion
              </button>

              {mens ? <IoMdArrowDropup /> : <FaCaretDown />}
            </div>

            {mens && (
              <ul className="absolute top-6 rounded-lg shadow-lg border bg-white p-5 z-10">
                <li onClick={closeSideBar} className="mb-2">
                  <Link
                    href={"/Formal"}
                    className={`${
                      pathname === "/Formal" ? "text-red-500" : ""
                    }`}
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
                    className={`${
                      pathname === "/Casual" ? "text-red-500" : ""
                    }`}
                  >
                    Casual
                  </Link>
                </li>
              </ul>
            )}
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
      </section>
    </>
  );
};

export default SideBar;
