import React from "react";
import { FeatureProps } from "@/data";
import { features } from "@/data";
import Image from "next/image";

type Props = {};

const Features = (props: Props) => {
  return (
    <section id="features" className="bg-lightGrayishBlue -z-30">
      <div className="md:container md:max-w-screen-xl md:mx-auto px-3 md:px-0 py-20">
        <h2 className="text-darkBlue text-center md:text-left text-3xl font-light mb-5">
          Why choose Easybank?
        </h2>
        <p className="text-sm font-light text-grayishBlue text-center md:text-left mb-10">
          We leverage Open Banking to turn your bank account into your financial
          hub. <br className="hidden md:flex"/>Control your finances like never before.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="px-3 flex py-10 md:py-0 gap-y-4 flex-col">
              <div className="md:self-start self-center">
                <Image
                  src={feature.img}
                  width={55}
                  height={55}
                  alt="feature-img"
                />
              </div>
              <h3 className="text-darkBlue text-center md:text-left text-lg font-light">
                {feature.title}
              </h3>
              <p className="text-grayishBlue text-center md:text-left text-sm font-light">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
