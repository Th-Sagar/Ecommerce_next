"use client"

import React from "react";

const Footer = () => {
  return (
    <>
      <section className="bg-green-400 text-center p-2 ">
        All rights reserved &copy; {new Date().getFullYear()}
      </section>
    </>
  );
};

export default Footer;
