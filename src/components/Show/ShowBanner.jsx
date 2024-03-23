import React from "react";
import SmallCard from "../SmallCard";
import Image from "next/image";

const ShowBanner = () => {
  const items = [
    {
      title: "Proudly Nepali",
      image: "/images/show1.png",
    },
    {
      title: "Free Delivery",
      image: "/images/show2.png",
    },
    {
      title: "Fashion",
      image: "/images/show3.png",
    },
    {
      title: "Beauty",
      image: "/images/show4.png",
    },
    {
      title: "Home & Decor",
      image: "/images/show5.png",
    },
    {
      title: "Everyday Low Price",
      image: "/images/show6.png",
    },
    {
      title: "Electronic Bazaar",
      image: "/images/show7.png",
    },
    {
      title: "New on Lions",
      image: "/images/show8.png",
    },
  ];
  return (
    <>
      <div className=" max-w-screen-2xl lg:mx-auto mx-5 md:mx-16 my-10 border-red-600 flex justify-around overflow-x-scroll no-scrollbar gap-20">
        {items.map((item, i) => (
          <div key={i} className="flex text-center justify-center flex-col gap-4 hover:text-oranges">
          <SmallCard title={item.title} image={item.image}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowBanner;
