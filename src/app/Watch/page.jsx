"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

const Watch = () => {
  const [number, setNumber] = useState(1);
  const handleAdd = () => {
    if (number < 5) {
      setNumber(number + 1);
    }
  };
  const handleSub = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  return (
    <>
      <section className=" mt-10 flex gap-4">
        <main className=" w-1/2">
          <div>
            <Image
              src={"/items/items1.jpg"}
              alt="watch"
              height={250}
              width={250}
            />
          </div>
          <hr className=" my-5 w-full" />
          <div className=" gap-10 ml-5 mb-4 flex justify-center items-center">
            <FaChevronLeft
              size={20}
              className=" mr-5 flex justify-center items-center"
            />
            <Image
              src={"/watch/watch1.webp"}
              className=" border hover:border hover:border-orange-500 p-3"
              alt="watch"
              height={50}
              width={50}
            />
            <Image
              src={"/watch/watch2.webp"}
              className=" border hover:border hover:border-orange-500 p-3"
              alt="watch"
              height={50}
              width={50}
            />
            <Image
              src={"/watch/watch3.webp"}
              className=" border hover:border hover:border-orange-500 p-3"
              alt="watch"
              height={50}
              width={50}
            />
            <Image
              src={"/watch/watch4.webp"}
              className=" border hover:border hover:border-orange-500 p-3"
              alt="watch"
              height={50}
              width={50}
            />
            <FaChevronRight
              size={20}
              className="ml-5 flex justify-center items-center "
            />
          </div>
        </main>

        <main className="w-1/2">
          <h1 className=" font-bold text-lg mb-4">
            T800 Ultra Smartwatch Series 8 1.99 Inch
          </h1>
          <p className=" mb-4 flex gap-3">
            <div className="flex  ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>{" "}
            <span className=" text-blue-700 border-r border-r-black pr-2 mr-2">
              {" "}
              3 Ratings
            </span>{" "}
            <span className=" text-blue-700"> 3 Answered Questions</span>
          </p>
          <p>
            Brand{" "}
            <span className=" text-blue-700 border-r border-r-black pr-2 mr-2">
              {" "}
              No Brand{" "}
            </span>{" "}
            <span className=" text-blue-700">
              {" "}
              More Wearable Technology from No Brand
            </span>
          </p>
          <hr className="my-3" />

          <section>
            <h3 className=" text-orange-500">Rs. 875</h3>
            <h3>
              <span className=" line-through"> Rs.2,489</span> -55%
            </h3>
          </section>

          <hr className="my-3" />
          <section>
            <h3 className="mb-3">Color Family</h3>
            <main className="flex gap-3">
              <div className=" w-5 cursor-pointer rounded-md bg-black">f</div>
              <div className=" w-5 cursor-pointer rounded-md bg-gray-500"></div>
              <div className=" w-5 cursor-pointer rounded-md bg-orange-500"></div>
            </main>
            <div className="flex gap-5 my-5">
              <h2>Quantity</h2>
              <div className="flex gap-5">
                <RiSubtractFill
                  className=" cursor-pointer"
                  onClick={handleSub}
                />
                <div>{number}</div>
                <IoMdAdd className="cursor-pointer" onClick={handleAdd} />
              </div>
            </div>
          </section>

          <section className=" flex gap-5">
            <div className=" bg-blue-400 text-lg cursor-pointer font-bold p-2 rounded-md text-white">
              Buy Now
            </div>
            <div className=" bg-orange-500 text-lg cursor-pointer font-bold  p-2 rounded-md text-white">
              Add to Cart
            </div>
          </section>
        </main>
      </section>

      <section className=" max-w-screen-2xl ml-10">
        <main className="mt-5">
          <h1 className=" font-bold text-2xl">
            Product details of T800 Ultra Smartwatch Series 8 1.99 Inch
          </h1>
          <div className=" my-2">
            <div>
              <li>Product Type : Smart Watch T800 Ultra </li>
              <li>Model No: Watch 8</li>
              <li>Screen Size: 1.99'' Color HD Display</li>
              <li>It has 3 days stand by battery backup</li>
              <li>It has full day usage battery capacity</li>
              <li>It has USB Wireless magnetic charger for charging</li>
              <li>
                It includes calculator features. It has calendar features.
              </li>
              <li>It provides Facebook, Twitter and WhatsApp notification.</li>
              <li>
                It includes apps functions like heart rate measurement, blood
                pressure measurement, motion records, sleep detection, physical
                training (please be informed that all these are for reference
                only, not for medical purpose).
              </li>
              <li>It has Bluetooth music and many more functions.</li>
              <li>
                Disclaimer : Software (User-interface/functions) of the watch
                may differ from time to time. So please check the video attached
                in image section.
              </li>
            </div>
          </div>
        </main>
      </section>

      <section className="my-4 max-w-screen-2xl ml-10">
        <h1 className="font-bold text-2xl">
          Specifications of T800 Ultra Smartwatch Series 8 1.99 Inch
        </h1>

        <div  className="ml-40 flex  gap-40">
          <div>
          <ul>
          <li className=" my-3">
              <h1 className=" text-gray-400">Brand</h1> <p>No Brand</p>
            </li>
            <li  className=" my-3">
              <h1 className=" text-gray-400">Display</h1> <p>Type Not Specified</p>
            </li>
            <li  className=" my-3">
              <h1 className=" text-gray-400">Movement</h1>
              <p> Not Specified</p>
            </li>
            <li  className=" my-3">
              <h1 className=" text-gray-400">Generation</h1>
              <p className=" text-gray-400">Not Specified</p>
            </li>
          </ul>
          </div>
          <div>
          <ul>
          <li className=" my-3">
              <h1 className=" text-gray-400">SKU</h1> <p>127170237_NP-1034479770</p>
            </li>
            <li  className=" my-3">
              <h1 className=" text-gray-400">Bluetooth Version</h1> <p>Not Specified</p>
            </li>
            <li  className=" my-3">
              <h1 className=" text-gray-400">Compatible Operating System</h1>
              <p> Not Specified</p>
            </li>
            <li  className=" my-3">
              <h1 className=" text-gray-400">Material Type</h1>
              <p className=" text-gray-400">Metal</p>
            </li>
          </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Watch;
