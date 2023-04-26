import React from "react";
import { ArticlesProps } from "@/data";
import { articles } from "@/data";
import Image from "next/image";

type Props = {};

const ArticlesSection = (props: Props) => {
  return (
    <section
      id="articles"
      className="py-20 md:container md:max-w-screen-xl md:mx-auto"
    >
      <h3 className="text-darkBlue text-center md:text-left text-3xl font-light mb-10">
        Latest Articles
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-3">
        {articles.map((article) => (
          <div key={article.id} className="px-3 pb-10 md:pb-0 md:px-0">
            <div className="">
                <Image
                  src={article.img}
                  width={320}
                  height={320}
                  alt="article-img"
                  className="object-cover overflow-hidden w-full h-auto object-center"
                />
            </div>
            <div className="flex flex-col gap-y-3 px-3">
              <span className="text-grayishBlue pt-4 font-medium text-xs">
                {article.name}
              </span>
              <h4 className="text-darkBlue leading-tight text-lg hover:text-brightCyan cursor-pointer">
                {article.title}
              </h4>
              <p className="text-grayishBlue text-sm font-light">
                {article.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
