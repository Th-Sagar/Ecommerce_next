import Image from "next/image";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Watch = () => {
  return (
    <section className=" mt-10 flex">
      <main className=" w-1/3">
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

      <main>
        <h1 className=" font-bold text-lg mb-4">
          T800 Ultra Smartwatch Series 8 1.99 Inch
        </h1>
        <p className=" mb-4">
          rating 4.5 <span className=" text-blue-700 border-r border-r-black pr-2 mr-2"> 3 Ratings</span>{" "}
          <span className=" text-blue-700"> 3 Answered Questions</span>
        </p>
        <p>
          Brand <span className=" text-blue-700 border-r border-r-black pr-2 mr-2"> No Brand </span>{" "}
          <span className=" text-blue-700">
            {" "}
            More Wearable Technology from No Brand
          </span>
        </p>
      </main>

      <main></main>
    </section>
  );
};

export default Watch;
