import Image from "next/image";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";
import Logo from "../components/elements/Logo";
import ActionButton from "./ActionButton";
type Props = {};
const fecha = new Date().getFullYear();
const Footer = (props: Props) => {
  return (
    <footer id="footer" className="bg-darkBlue">
      <div className="md:container py-20 md:max-w-screen-xl md:mx-auto grid grid-cols-1 md:grid-cols-4">
        <div className="flex justify-center md:flex-col mb-10 md:mb-0 md:justify-between row-start-3 row-end-4 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
          <Logo fill="#fff" className="hidden md:flex" />
          <div className="flex gap-x-10 md:gap-x-3">
            <BsFacebook
              color="#fff"
              size={"1.25rem"}
              className="hover:fill-brightCyan"
            />
            <BsInstagram
              color="#fff"
              size={"1.25rem"}
              className="hover:fill-brightCyan"
            />
            <BsYoutube
              color="#fff"
              size={"1.25rem"}
              className="hover:fill-brightCyan"
            />
            <BsPinterest
              color="#fff"
              size={"1.25rem"}
              className="hover:fill-brightCyan"
            />
            <BsTwitter
              color="#fff"
              size={"1.25rem"}
              className="hover:fill-brightCyan"
            />
          </div>
        </div>
        <div className="md:hidden flex justify-center row-start-4 mb-16 row-end-5">
          <Logo fill="#fff" className="" />
        </div>
        <div className="md:hidden flex justify-center row-start-5 row-end-6">
          <p className="text-white text-xs font-light">
            Copyright {fecha} &copy;. All Rights Reserved
          </p>
        </div>
        <div className=" grid grid-cols-2 mb-10 md:mb-0 md:grid-cols-2 row-start-2 row-end-3 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-4">
          <div className="flex justify-center">
            <ul className=" flex flex-col gap-y-3">
              <li className="hover:text-brightCyan cursor-pointer text-sm text-white">
                About Us
              </li>
              <li className="hover:text-brightCyan cursor-pointer text-sm text-white">
                Contact
              </li>
              <li className="hover:text-brightCyan cursor-pointer text-sm text-white">
                Blog
              </li>
              {/* <li className="hover:text-brightRed cursor-pointer text-sm text-white">
                About Us
              </li> */}
            </ul>
          </div>
          <div className="flex justify-center">
            <ul className=" flex flex-col gap-y-3">
              <li className="hover:text-brightCyan cursor-pointer text-sm text-white">
                Careers
              </li>
              <li className="hover:text-brightCyan cursor-pointer text-sm text-white">
                Support
              </li>
              <li className="hover:text-brightCyan cursor-pointer text-sm text-white">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
        <div className="flex md:flex-col mb-10 md:mb-0 md:items-end justify-center md:justify-between row-start-1 row-end-2 md:col-start-4 md:col-end-5">
          {/* <form action="">
            <input
              type="email"
              name="correo"
              id="correo"
              placeholder="email@email.com"
              className="form-input px-4 py-3 rounded-full"
            />
            <input
              type="submit"
              value="Go"
              className="bg-brightRed hover:bg-red-300 cursor-pointer ml-2 px-4 py-3 rounded-full text-white"
            />
          </form> */}
          <ActionButton text="Request Invite" className="" />
          <p className="text-white text-xs font-light md:flex hidden">
            Copyright {fecha} &copy;. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
