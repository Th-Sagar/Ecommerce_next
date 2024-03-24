import Image from "next/image";
import React from "react";

const SmallCard = ({ title, image }) => {
  return (
    <>
      
        <Image src={image} width={100} height={100} alt={title} />
        <p className="mt-2 text-center">{title}</p>
     
    </>
  );
};

export default SmallCard;
