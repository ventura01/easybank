"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ActionButton from "./ActionButton";
import { HiBars3, HiXMark } from "react-icons/hi2";

type Props = {};

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <nav id="navigation" className="bg-white">
      <div className="md:container relative flex px-5 md:px-0 md:py-3 py-8 justify-between items-center md:max-w-screen-xl md:mx-auto">
        <div>
          <Image
            src="/images/logo.svg"
            width={120}
            height={120}
            alt="logo"
            className="w-32 h-auto"
            priority
          />
        </div>
        <div
          className={`${
            open
              ? "bg-darkBlue shadow-md absolute pt-12 pb-8 right-0 top-24 w-full z-50 md:hidden rounded-lg"
              : "hidden md:flex"
          }`}
        >
          <div
            className={`${
              open
                ? "flex flex-col text-white gap-y-10 items-center"
                : "md:flex md:gap-x-8"
            }`}
          >
            <Link
              className="hover:text-darkBlue text-sm font-light text-grayishBlue"
              href="#navigation"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              className="hover:text-darkBlue text-sm font-light text-grayishBlue"
              href="#home"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              className="hover:text-darkBlue text-sm font-light text-grayishBlue"
              href="#footer"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Link
              className="hover:text-darkBlue text-sm font-light text-grayishBlue"
              href="#articles"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
            <Link
              className="hover:text-darkBlue text-sm font-light text-grayishBlue"
              href="#features"
              onClick={() => setOpen(false)}
            >
              Careers
            </Link>
          </div>
          <div className="md:hidden flex justify-center mt-8">
            <ActionButton text="Request Invite" className="" />
          </div>
        </div>
        <div>
          <ActionButton text="Request Invite" className="hidden md:flex" />
        </div>
        <div
          className={`${
            open &&
            "md:hidden w-screen h-screen bg-opacity-25 right-0 top-0 z-0 fixed backdrop-blur-sm bg-gray-500"
          }`}
        ></div>
        <button
          className="md:hidden flex bg-darkBlue p-2 rounded-full text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiXMark /> : <HiBars3 />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
