"use client";

import Link from "next/link";
import React, { useState } from "react";

const SideBar = () => {
  const [electronic, setElectronic] = useState(false);
  const [mens, setMens] = useState(false);

  const showElectronics = () => {
    setElectronic((pre) => !pre);
    setMens(false)
  };

  const showMens = () => {
    setMens((pre) => !pre);
    setElectronic(false)
  };

  return (
    <>
      <section className="relative">
        <ul className="flex gap-16 justify-center items-center">
          <li>
            <button onClick={showElectronics}>Electronics</button>

            {electronic && (
              <ul className="absolute top-6 shadow-lg border bg-white p-5 z-10">
                <li>Home Appliances</li>
                <li>Life Style</li>
              </ul>
            )}
          </li>
          <li>
            <Link href={"/electronic"}>Health & Beauty</Link>
          </li>

          <li>
            <button onClick={showMens}>Mens Fashion</button>

            {mens && (
              <ul className="absolute top-6 shadow-lg border bg-white p-5 z-10">
                <li>Formal</li>
                <li>Semi Formal</li>
                <li>Casual</li>
              </ul>
            )}
          </li>

          <li>
            <Link href={"/electronic"}>Womens Fashion</Link>
          </li>
          <li>
            <Link href={"/electronic"}>Sports</Link>
          </li>
          <li>
            <Link href={"/electronic"}>Groceries</Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default SideBar;
