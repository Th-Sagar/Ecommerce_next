"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://fakestoreapi.com/products");
      setData(result.data);
      console.log(result.data);
    };

    fetchData();
  }, []);

  return (
    <section>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.price}</p>
          <Image src={item.image} alt={item.title} width={200} height={200} />
        </div>
      ))}
    </section>
  );
};

export default Page;
