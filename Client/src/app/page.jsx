"use client";

import React, { useEffect, useState } from "react";
import CardCategori from "@/components/CardCategori";
import CardProduct from "@/components/CardProduct";
import CommentCard from "@/components/CommentCard";

export default function Home() {
  const [categorys, setA] = useState();
  const [products, setProduct] = useState();
  const [comments, setComments] = useState();
  const [day, setDay] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  useEffect(() => {
    (async () => {
      try {
        const categorys = await fetch("http://localhost:7000/api/v1/categorys");
        const dataCategorys = await categorys.json();
        setA(dataCategorys.data);
        const products = await fetch("http://localhost:7000/api/v1/products");
        const dataProducts = await products.json();
        setProduct(dataProducts.data);
        const comments = await fetch("http://localhost:7000/api/v1/comment");
        const dataComments = await comments.json();
        setComments(dataComments.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  
  const cart = categorys?.map((e, index) => {
    return (
      <CardCategori
        key={index}
        image={`http://localhost:7000/${e?.image}`}
        name={e.name}
      />
    );
  });
  const product = products?.map((e, index) => {
    return (
      <CardProduct
        key={index}
        image={`http://localhost:7000/${e?.mainImage}`}
        price={e.price}
        name={e.title}
      />
    );
  });
  const comment = comments?.map((e, index) => {
    return (
      <CommentCard
        key={index}
        name={e.name}
        titel={e.titel}
        comment={e.comment}
      />
    );
  });
  const targetDate = new Date("December 31, 2024 23:59:59").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    setDay(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  }, 1000);

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
          <div className="flex justify-center items-center gap-10 ">{cart}</div>
        </div>
        <div className="mb-20">
          <h5 className="text-[30px] py-5 text-center">Our Bestseller</h5>
          <div className="flex flex-wrap justify-center items-center gap-10 ">
            {product}
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
                  <span className="text-[24px] font-bold">{day}</span>
                </div>
                <div>
                  <span>Days</span>
                </div>
              </div>
              <div className="border-2 border-black rounded-lg flex flex-col items-center p-3">
                <div>
                  <span className="text-[24px] font-bold">{hours}</span>
                </div>
                <div>
                  <span>Hours</span>
                </div>
              </div>
              <div className="border-2 border-black rounded-lg flex flex-col items-center p-3">
                <div>
                  <span className="text-[24px] font-bold">{minutes}</span>
                </div>
                <div>
                  <span>Mins</span>
                </div>
              </div>
              <div className="border-2 border-black rounded-lg flex flex-col items-center p-3">
                <div>
                  <span className="text-[24px] font-bold">{seconds}</span>
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
          <div className=" flex gap-10">{comment}</div>
        </div>
      </div>
    </>
  );
}
