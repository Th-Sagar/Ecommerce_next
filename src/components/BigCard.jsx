import Image from 'next/image'
import React from 'react'

const BigCard = ({image,title,DiscountPrice,ActualPrice,Discount}) => {
  return (
    <>

<Image alt={title} src={image} width={100} height={100} />

<p className="flex flex-wrap break-words">
  {title.slice(0, 46)}...
</p>

<div>
  <p className="text-oranges">{DiscountPrice}</p>

  <p>
    <span className="line-through text-gray-400">
      {ActualPrice}
    </span>
    <span>{Discount}</span>
  </p>
</div>


    </>
  )
}

export default BigCard