import React from "react";
import ActionButton from "./ActionButton";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <header id="home" className="relative overflow-x-hidden md:overflow-x-visible z-50">
      <div className="md:container md:max-w-screen-xl md:mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="pt-[500px] flex flex-col gap-y-8 md:py-32 py-20 px-3 md:px-0">
          <h1 className="md:text-6xl text-4xl text-center md:text-left text-darkBlue font-medium">
            Next generation
            <br className="md:flex hidden" /> digital banking
          </h1>
          <p className="text-grayishBlue text-sm font-light text-center md:text-left">
            Take your financial life online. Your Easybank account
            <br className="md:flex hidden" /> will be a one-stop-shop for
            spending, saving,
            <br className="md:flex hidden" /> budgeting, investing, and much
            more.
          </p>
          <div className="md:self-start self-center">
            <ActionButton text="Request Invite" className="" />
          </div>
        </div>
        <div>
          <div className="absolute -right-44 -top-44 -z-20">
            <Image
              src="/images/bg-intro-desktop.svg"
              width={940}
              height={940}
              alt="hero-img"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute -right-16 -top-16 -z-10">
            <Image
              src="/images/image-mockups.png"
              width={650}
              height={650}
              alt="hero-img"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
