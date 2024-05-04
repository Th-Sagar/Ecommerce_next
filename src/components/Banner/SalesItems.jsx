import React from "react";
import BigCard from "../BigCard";
import Link from "next/link";

const SalesItems = () => {
  const items = [
    {
      title: "T800 Ultra Smartwatch Series 8 1.99 Inch Smart Watch",
      image: "/items/items1.jpg",
      DiscountPrice: "Rs.875",
      ActualPrice: "Rs.4000",
      Discount: "-78% ",
      Link:"/Watch"
      
    },
    {
      title: "The Psychology of Money By Morgan Housel",
      image: "/items/items2.jpg",
      DiscountPrice: "Rs.160",
      ActualPrice: "Rs.640",
      Discount: "-75% ",
      Link:"/"
    },
    {
      title:
        "PlayGo T20 Ultralight Wireless Earbuds With ENC Environmental Noise Reduction and EBEL Drivers | HD Call Quality | Sensory Controls | 6 Month Warranty",
      image: "/items/items3.jpg",
      DiscountPrice: "Rs.999",
      ActualPrice: "Rs.3490",
      Discount: "-71% ",
      Link:"/Earphone"
    },
    {
      title: "Softy Sensitive Baby Wet Wipes (Aloe+chamomile) - 80 wipes",
      image: "/items/items4.jpg",
      DiscountPrice: "Rs.69",
      ActualPrice: "Rs.125",
      Discount: "-44% ",
      Link:"/"
    },
    {
      title:
        "Drools Puppy Chicken And Egg Dog Food - 400gms | Buy 2 Get 1 Free By Crown Aquatics",
      image: "/items/items5.jpg",
      DiscountPrice: "Rs.255",
      ActualPrice: "Rs.255",
      Discount: "-0% ",
      Link:"/"
    },
  ];
  return (
    <div className="  max-w-screen-2xl    lg:mx-auto mx-5 md:mx-16 my-10 grid place-items-center md:grid-cols-3 lg:grid-cols-5 ">
      {items.map((item, i) => (
        <div
          key={i}
          className=" hover:shadow-2xl p-10 flex flex-col justify-center items-center"
        >
          <Link href={item.Link}>
          <BigCard
            image={item.image}
            title={item.title}
            DiscountPrice={item.DiscountPrice}
            ActualPrice={item.ActualPrice}
            Discount={item.Discount}
          />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SalesItems;
