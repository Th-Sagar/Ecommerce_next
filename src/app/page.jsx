"use client";

import SalesItems from "@/components/Banner/SalesItems";
import SliderBanner from "@/components/Banner/SliderBanner";
import Timmer from "@/components/Banner/Timmer";
import Categories from "@/components/Categories/Categories";
import ShowBanner from "@/components/Show/ShowBanner";

const Page = () => {
  return (
    <>
      <section className="">
        <SliderBanner />
        <ShowBanner />

        <Timmer />
        <hr className="mx-5 md:mx-20" />
        <SalesItems />
        <Categories />
      </section>
    </>
  );
};

export default Page;
