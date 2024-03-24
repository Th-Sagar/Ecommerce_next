import Image from "next/image";
import React from "react";
import SmallCard from "../SmallCard";

const Categories = () => {
  const items = [
    {
      title: "Disposable Diapers",
      image:'/Categories/Categories1.jpg'
    },
    {
      title: "Serum & Essence",
      image:'/Categories/Categories2.jpg'
    },
    {
      title: "Humidifiers",
      image:'/Categories/Categories3.jpg'
    },
    {
      title: "Wireless Earbuds",
      image:'/Categories/Categories4.jpg'
    },
    {
      title: "Covers",
      image:'/Categories/Categories5.jpg'
    },
    {
      title: "T-Shirts",
      image:'/Categories/Categories6.jpg'
    },
    {
      title: "Sugar",
      image:'/Categories/Categories7.jpg'
    },
    {
      title: "Smartwatches",
      image:'/Categories/Categories8.jpg'
    },
  ];
  return (
    <section className=" max-w-screen-2xl lg:mx-auto mx-5 md:mx-16 my-10 ">
      <h1 className="text-gray-400 text-3xl">Categories</h1>

      <section className=" grid place-items-center mt-2 md:grid-cols-4">
        {
            items.map((item,i)=>(
                <div key={i} className="hover:shadow-2xl  p-10">

                 <SmallCard title={item.title} image={item.image}/>

                </div>
            ))

        }


      </section>
    </section>
  );
};

export default Categories;
