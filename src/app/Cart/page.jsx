"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const [number, setNumber] = useState(1);

  const handleSub = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const handleAdd = () => {
    if (number < 5) {
      setNumber(number + 1);
    }
  };
  return (
    <main className=" max-w-screen-2xl ml-10 my-10">
      <section className="">
        <table className=" w-full">
          
          <tr className=" border-b  ">
            <th>Items</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Purchase</th>
            <th>Delete</th>
          </tr>
          <br />
         
          <tr className="text-center ">
            <td className="flex justify-center">
              <Image
                src={"/watch/watch1.webp"}
                alt="watch"
                width={50}
                height={50}
              />
            </td>
            <td>
              <div className="flex gap-5 justify-center">
                <RiSubtractFill
                  className=" cursor-pointer"
                  onClick={handleSub}
                />
                <div>{number}</div>
                <IoMdAdd className="cursor-pointer" onClick={handleAdd} />
              </div>
            </td>
            <td>827</td>
            <td >
              <div className="flex justify-center">
              <BiPurchaseTagAlt className=" cursor-pointer" size={20} />
              </div>
            </td>
            <td >
              <div className="flex justify-center">
              <MdDelete className=" cursor-pointer" size={20} />
              </div>
            </td>
          </tr>
        </table>
      </section>
    </main>
  );
};

export default Cart;
