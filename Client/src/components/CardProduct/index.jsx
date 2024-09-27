import React from "react";

export default function CardProduct({name,price,image}) {
  return (
    <>
      <div>
        <div>
          <img src={image} alt="product-name" className="w-[200px] h-[150px] mb-4 rounded-md " />
        </div>
        <div>
          <h5 className="font-bold text-[18px]">{name}</h5>
          <p className="text-[13px]"> brand</p>
          <span className="text-[15px]">$ {price}</span>
        </div>
      </div>
    </>
  );
}
