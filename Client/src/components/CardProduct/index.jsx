import React from "react";

export default function CardProduct() {
  return (
    <>
      <div>
        <div>
          <img src="/p1.jpg" alt="product-name" className="w-[200px] mb-4" />
        </div>
        <div>
          <h5 className="font-bold text-[18px]">Roadstar</h5>
          <p className="text-[13px]">Printed Cotton T-Shirt</p>
          <span className="text-[15px]">$33.00</span>
        </div>
      </div>
    </>
  );
}
