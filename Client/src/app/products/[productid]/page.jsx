"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ProductPage({params}) {
    const {productid} = params
    const [product,setProduct]= useState()

    useEffect(() => {
      (async () => {
        const response = await fetch(`http://localhost:7000/api/v1/products/${productid}?populate=categoryId`);
        const data = await response.json();
        setProduct(data.data)
        console.log(data.data.categoryId[0]?.name)
      })();
    }, []);
  return (
    <div className="container mx-auto p-6">
        <h1>product id : {productid} </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img src={`http://localhost:7000/${product?.mainImage}`} alt="" />
          <div className="flex mt-4 space-x-2">
            {product?.images?.map((e,index)=>{
              return <img src={`http://localhost:7000/${e}`} alt="" key={index} width={"130px"} />
            })}
          </div>
        </div>

        <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
          <h1 className="text-3xl font-bold">{product?.title}</h1>
          <p className="text-gray-700 mt-2">{product?.categoryId[0]?.name}</p>
          <div className="flex items-center mt-2">
            <span className="text-xl font-semibold">${product?.price}</span>
            {/* <span className="text-gray-500 line-through ml-2">$100.00</span> */}
          </div>

          <div className="flex mt-4 items-center space-x-2">
            <button className="px-4 py-2 bg-gray-300 rounded">-</button>
            <span>1</span>
            <button className="px-4 py-2 bg-gray-300 rounded">+</button>
          </div>

          <button className="mt-6 w-full bg-black text-white py-2 rounded-lg">Add to Cart</button>
        </div>
      </div>


      <div className="mt-8">
        <h2 className="text-xl font-semibold">Descriptions</h2>
        <p className="text-gray-700 mt-2">
          {product?.description}
        </p>
      </div>


      <div className="mt-8">
        <h2 className="text-xl font-semibold">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          <div className="border p-4 rounded-lg">
            <Image src="/images/related1.png" alt="Product 1" width={200} height={240} />
            <h3 className="font-semibold mt-2">US Polo</h3>
            <span className="text-lg font-bold">$40.00</span>
            <span className="text-sm line-through text-gray-500 ml-2">$50.00</span>
          </div>
          <div className="border p-4 rounded-lg">
            <Image src="/images/related2.png" alt="Product 2" width={200} height={240} />
            <h3 className="font-semibold mt-2">Roadstar</h3>
            <span className="text-lg font-bold">$60.00</span>
            <span className="text-sm line-through text-gray-500 ml-2">$70.00</span>
          </div>
          <div className="border p-4 rounded-lg">
            <Image src="/images/related3.png" alt="Product 3" width={200} height={240} />
            <h3 className="font-semibold mt-2">YK Disney</h3>
            <span className="text-lg font-bold">$30.00</span>
            <span className="text-sm line-through text-gray-500 ml-2">$35.00</span>
          </div>
          <div className="border p-4 rounded-lg">
            <Image src="/images/related4.png" alt="Product 4" width={200} height={240} />
            <h3 className="font-semibold mt-2">Flora</h3>
            <span className="text-lg font-bold">$35.00</span>
            <span className="text-sm line-through text-gray-500 ml-2">$45.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
