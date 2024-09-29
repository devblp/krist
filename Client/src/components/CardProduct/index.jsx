import Link from "next/link";
import React from "react";

export default function CardProduct({name,price,image,category,id}) {
  return (
    <>
      <div>
        <div>
          <img src={image} alt="product-name" className="w-[200px] h-[150px] mb-4 rounded-md " />
        </div>
        <div>
          <h5 className="font-bold text-[18px]">{name}</h5>
          <p className="text-[13px]"> {category}</p>
          <span className="text-[15px]">$ {price}</span>
        </div>
        <Link href={`/products/${id}`}> <button type="button">add card</button></Link>
      </div>
    </>
  );
}
