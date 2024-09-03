import React from "react";
import Image from "next/image";
import CardCategori from "@/components/CardCategori";
import CardProduct from "@/components/CardProduct";
import CommentCard from "@/components/CommentCard";

export default function Home() {
  return (
    <>
      <div className=" mx-10 mb-20">
        <div className=" flex justify-center items-center w-[100%] h-[620px] bg-gray-200 ">
          <div>
            <p className="text-[23px]">Classic Exlusive</p>
            <h1 className="text-[50px] font-bold">Womanes Collection</h1>
            <p className="text-[23px]">UPTO 40% OFF</p>
            <div className="my-5">
              <button
                type="button"
                className="bg-black px-4 py-1.5 rounded-lg text-white text-sm"
              >
                Shop Now
              </button>
            </div>
          </div>
          <div>
            <img src="/silder.png" alt="slider-image" className="w-[620px]" />
          </div>
        </div>
      </div>
      <div className="px-40">
        <div className="mb-32">
          <h5 className="text-[30px] py-5">Shop by Vategories</h5>
          <div className="flex justify-center items-center gap-20 ">
            <CardCategori />
            <CardCategori />
            <CardCategori />
            <CardCategori />
          </div>
        </div>
        <div className="mb-20">
          <h5 className="text-[30px] py-5 text-center">Our Bestseller</h5>
          <div className="flex flex-wrap justify-center items-center gap-16 ">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>
        <div className="flex mb-20 justify-around">
          <div className="flex flex-col gap-8">
            <h2 className="text-[30px] font-bold">Deals of the Month</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              <br />
              minus quibusdam. Eveniet reprehenderit odio voluptate? Dicta,
              <br />
              voluptatum, pariatur quam quibusdam dignissimos!
            </p>
            <div className="flex gap-5">
              <div className="border-2 border-black rounded-lg flex flex-col items-center p-3">
                <div>
                  <span className="text-[24px] font-bold">120</span>
                </div>
                <div>
                  <span>Days</span>
                </div>
              </div>
              <div className="border-2 border-black rounded-lg flex flex-col items-center p-3">
                <div>
                  <span className="text-[24px] font-bold">18</span>
                </div>
                <div>
                  <span>Hours</span>
                </div>
              </div>
              <div className="border-2 border-black rounded-lg flex flex-col items-center p-3">
                <div>
                  <span className="text-[24px] font-bold">15</span>
                </div>
                <div>
                  <span>Mins</span>
                </div>
              </div>
              <div className="border-2 border-black rounded-lg flex flex-col items-center p-3">
                <div>
                  <span className="text-[24px] font-bold">10</span>
                </div>
                <div>
                  <span>Secs</span>
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="bg-black px-4 py-1.5 rounded-lg text-white text-sm"
              >
                View All Products
              </button>
            </div>
          </div>
          <div>
            <img
              src="/imag1.jpg"
              alt=""
              className="w-[500px] border-4 border-red-300"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 p-10 h-[400px] ">
        <div className="mx-36">
          <h5 className="text-[30px] mb-10 text-center">Our Bestseller</h5>
          <div className=" flex gap-10">
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
        </div>
      </div>
    </>
  );
}
