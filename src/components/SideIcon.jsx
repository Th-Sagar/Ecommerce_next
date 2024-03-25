"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowUp, IoIosPersonAdd } from "react-icons/io";
import { PiSquaresFourThin } from "react-icons/pi";
gsap.registerPlugin(ScrollTrigger);

const SideIcon = () => {
  useGSAP(() => {
    gsap.to("#SideIcon", {
      scrollTrigger: {
        trigger: "#SideIcon",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        toggleActions: "restart pause reverse pause",
      },

      opacity: 1,
    });

    gsap.to("#SideIconUp", {
      scrollTrigger: {
        trigger: "#SideIconUp",
        start: "top 10%",

        end: "bottom 50%",
        scrub: 1,
        toggleActions: "restart pause reverse pause",
      },

      opacity: 1,
    });
  }, []);
  return (
    <section
      id="SideIcon"
      className="fixed opacity-0 left-0 top-[35rem] md:top-[50rem]  md:p-3"
    >
      <Link href="#top">
        <IoIosArrowUp
          size={18}
          id="SideIconUp"
          className="hover:text-oranges opacity-0 hover:shadow-2xl w-20"
        />
      </Link>

      <section className="mt-5">
        <FaHome
          size={18}
          className="hover:text-oranges hover:shadow-2xl w-20 mt-2"
        />
        <IoIosPersonAdd
          size={18}
          className="hover:text-oranges hover:shadow-2xl w-20 mt-2"
        />
        <PiSquaresFourThin
          size={18}
          className="hover:text-oranges hover:shadow-2xl w-20 mt-2"
        />
      </section>
    </section>
  );
};

export default SideIcon;
