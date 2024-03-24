import React from "react";
import BigCard from "../BigCard";


const SalesItems = () => {
  const items = [
    {
      title: "T800 Ultra Smartwatch Series 8 1.99 Inch Smart Watch",
      image: "/items/items1.jpg",
      DiscountPrice: "Rs.875",
      ActualPrice: "Rs.4000",
      Discount: "-78% ",
    },
    {
      title: "The Psychology of Money By Morgan Housel",
      image: "/items/items2.jpg",
      DiscountPrice: "Rs.160",
      ActualPrice: "Rs.640",
      Discount: "-75% ",
    },
    {
      title:
        "PlayGo T20 Ultralight Wireless Earbuds With ENC Environmental Noise Reduction and EBEL Drivers | HD Call Quality | Sensory Controls | 6 Month Warranty",
      image: "/items/items3.jpg",
      DiscountPrice: "Rs.999",
      ActualPrice: "Rs.3490",
      Discount: "-71% ",
    },
    {
      title: "Softy Sensitive Baby Wet Wipes (Aloe+chamomile) - 80 wipes",
      image: "/items/items4.jpg",
      DiscountPrice: "Rs.69",
      ActualPrice: "Rs.125",
      Discount: "-44% ",
    },
    {
      title:
        "Drools Puppy Chicken And Egg Dog Food - 400gms | Buy 2 Get 1 Free By Crown Aquatics",
      image: "/items/items5.jpg",
      DiscountPrice: "Rs.255",
      ActualPrice: "Rs.255",
      Discount: "-0% ",
    },
  ];
  return (
    <div className="flex  max-w-screen-2xl  md:flex-nowrap text-center gap-5 lg:gap-20 justify-center items-center overflow-scroll no-scrollbar  lg:mx-auto mx-5 md:mx-16 my-10 z-10">
      {items.map((item, i) => (
        <div
          key={i}
          className=" hover:shadow-2xl flex flex-col justify-center items-center  p-10 w-full "
        >

          <BigCard image={item.image} title={item.title} DiscountPrice={item.DiscountPrice} ActualPrice={item.ActualPrice} Discount={item.Discount}/>
      
        </div>
      ))}

      
    </div>
  );
};

export default SalesItems;
