import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-black w-full h-[400px] text-white">
        <div className="px-36">
          <div className="flex justify-between py-12">
            <div className="flex flex-col gap-7">
              <img src="" alt="logo-footer" />
              <div className="flex gap-2">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (704)555-555
              </div>
              <div className="flex gap-2">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                blp@gmail.com
              </div>
              <div className="flex gap-2">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                3333 Turkey Dr. Beshiktash <br /> naderan mahalese 333
              </div>
            </div>
            <div className=" space-x-3">
              <p className=" pb-3 text-xl">Information</p>
              <ul className=" leading-10">
                <Link href={"#"}>
                  <li>T-Shirts</li>
                </Link>
                <Link href={"#"}>
                  <li>Casual Shirts</li>
                </Link>
                <Link href={"#"}>
                  <li>Formal Shirts</li>
                </Link>
                <Link href={"#"}>
                  <li>Jackets</li>
                </Link>
                <Link href={"#"}>
                  <li>Blazers $ Coats</li>
                </Link>
              </ul>
            </div>
            <div className=" space-x-3">
              <p className=" pb-3 text-xl">Information</p>
              <ul className=" leading-10">
                <Link href={"#"}>
                  <li>T-Shirts</li>
                </Link>
                <Link href={"#"}>
                  <li>Casual Shirts</li>
                </Link>
                <Link href={"#"}>
                  <li>Formal Shirts</li>
                </Link>
                <Link href={"#"}>
                  <li>Jackets</li>
                </Link>
                <Link href={"#"}>
                  <li>Blazers $ Coats</li>
                </Link>
              </ul>
            </div>
            <div className="flex flex-col gap-7">
              <h5>Subscribe</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                <br />
                Doloribus enim amet magnam architecto molestiae
              </p>
              <div className=" relative">
                <input type="email" name="" id="" className=" bg-black rounded-md border-2 border-white py-1.5 px-7 pr-20 text-white focus:outline-none sm:text-sm sm:leading-6" placeholder="Your Email"/>
                <button  type="button" className=" absolute left-[260px] top-2">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between py-4 border-t border-t-gray-500">
            <div className="flex">
              <img src="" alt="cridi-cart-image" />
              <img src="" alt="master-cart-image" />
              <img src="" alt="googelpaly-cart-image" />
              <img src="" alt="paypal-cart-image" />
            </div>
            <div>@2024 BlP All Rights are reserved</div>
            <div className="flex gap-5">
             <Link href={""}> <svg
                className="h-5 w-5 text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg></Link>
              <Link href={""}><svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg></Link>
              <Link href={""}><svg
                className="h-5 w-5 text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
              </svg></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
