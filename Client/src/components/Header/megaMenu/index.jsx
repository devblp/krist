import Link from "next/link";
import React from "react";

export default function MegaMenu() {
  return (
    <div className="absolute flex justify-between z-10 top-10 -left-64 w-[1000px] h-[430px] bg-black rounded-lg text-white p-10   ">
      <div className=" space-x-3">
        <p className=" pb-3 text-xl">Men</p>
        <ul className=" leading-10">
          <Link href={"#"}><li>T-Shirts</li></Link>
          <Link href={"#"}><li>Casual Shirts</li></Link>
          <Link href={"#"}><li>Formal Shirts</li></Link>
          <Link href={"#"}><li>Jackets</li></Link>
          <Link href={"#"}><li>Blazers $ Coats</li></Link>
        </ul>
      </div>
      <div className=" space-x-3 ">
        <p className=" pb-3 text-xl">Women</p>
        <ul className=" leading-10">
        <Link href={"#"}><li>Kurtas & Suits</li></Link>
        <Link href={"#"}><li>Sarees</li></Link>
        <Link href={"#"}><li>Ethnic wear</li></Link>
        <Link href={"#"}><li>Lehenga Cholis</li></Link>
        <Link href={"#"}><li>Jackets</li></Link>
        </ul>
      </div>
      <div className=" space-x-3">
        <p className=" pb-3 text-xl">Footwear</p>
        <ul className=" leading-10">
        <Link href={"#"}><li>Flats</li></Link>
        <Link href={"#"}><li>Casual Shoes</li></Link>
        <Link href={"#"}><li>Heels</li></Link>
        <Link href={"#"}><li>Boots</li></Link>
          <Link href={"#"}><li>Sports Shoes & Floaters</li></Link>
        </ul>
      </div>
      <div className=" space-x-3">
        <p className=" pb-3 text-xl">Kids</p>
        <ul className=" leading-10">
        <Link href={"#"}><li>T-Shirts</li></Link>
        <Link href={"#"}><li>Shirts</li></Link>
        <Link href={"#"}><li>Jeans</li></Link>
        <Link href={"#"}><li>Trousers</li></Link>
        <Link href={"#"}><li>Party Wear</li></Link>
        <Link href={"#"}><li>lnnerwear & Thermal</li></Link>
        <Link href={"#"}><li>Track Pants</li></Link>
        <Link href={"#"}><li>Value Pack</li></Link>
        </ul>
      </div>
    </div>
  );
}
