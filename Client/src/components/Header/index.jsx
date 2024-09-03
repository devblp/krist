"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import MegaMenu from "./megaMenu";

export default function Header() {
  const [btnMegaMeno, setBtnMegaMeno] = useState(false);

  const handleBtnOpenAndClose = () => {
    setBtnMegaMeno(!btnMegaMeno);
  };

  return (
    <div className="flex justify-between items-center py-8 px-28">
      <div>
        <Link href={"/"}>
          <img src="" alt="logo" />
        </Link>
      </div>
      <div>
        <ul className="flex gap-8 relative">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <li className="flex relative">
            <Link href={"/products"}>Shop</Link>
            {btnMegaMeno ? (
              <button
                onClick={handleBtnOpenAndClose}
                className=" absolute -right-5 top-[10%]"
              >
                <svg
                  className="h-5 w-5 text-gray-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 15 12 9 18 15" />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleBtnOpenAndClose}
                className=" absolute -right-5 top-[10%]"
              >
                <svg
                  className="h-5 w-5 text-gray-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            )}
          </li>
          {btnMegaMeno && <MegaMenu />}
          <Link href={""}>
            <li>Our Story</li>
          </Link>
          <Link href={""}>
            <li>Blog</li>
          </Link>
          <Link href={""}>
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-5 items-center">
        <Link href={""}>
          <svg
            className="h-5 w-5 text-black-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </Link>
        <Link href={""}>
          <svg
            className="h-5 w-5 text-black-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </Link>
        <Link href={""}>
          <div className=" relative">
            <svg
              className="h-5 w-5 text-black-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <div className=" bg-lime-500 w-4 h-4 rounded-full absolute top-3 left-2 text-center text-[12px]">1</div>
          </div>
        </Link>
        <button type="button" className="bg-black px-4 py-2 rounded-lg">
          <Link href="/auth" className="text-white text-sm">
            Login
          </Link>
        </button>
      </div>
    </div>
  );
}
