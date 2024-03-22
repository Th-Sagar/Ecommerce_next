import Image from "next/image";
import React from "react";

const SmallCard = ({ title, image }) => {
  return (
    <>
      
        <Image src={image} width={100} height={100} alt={title} />
        <h1>{title}</h1>
     
    </>
  );
};

export default SmallCard;
