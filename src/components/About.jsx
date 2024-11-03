/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div className="mb-32">
      <div className="flex flex-col items-center justify-center gap-6 about ">
        <div className="md:w-[80%] w-[95%] px-3 h-[400px] rounded-3xl md:rounded-[80px] flex justify-center items-center md:h-[500px] bg-[#0c1038]">
          <Image
            src="/bt.png"
            alt=""
            width={500}
            height={900}
            className="flex items-center justify-center"
          />
        </div>
        <div></div>
      </div>
      <div className="bg-[#151313] px-8 py-20 mt-24 flex-col lg:flex-row flex lg:justify-between justify-center items-center ">
        <Image src="/more.png" alt="" width={475} height={200} />
        <div className="lg:w-[50%] py-8 flex flex-col gap-7 ">
          <h2 className="font-bold plus text-[2.7rem] text-[] leading-tight">
            Our Automated AI Agents Will Write Your Daily Blog For Less Than $2
            an Article
          </h2>
          <p className="san text-[#a6a6a6] text-[1.2rem]">
            Anyone can ask ChatGPT to "Write an article for me." However,
            GhostRYT goes above and beyond by giving you a team of AI agents.
            They brainstorm content ideas, pen viral headlines, craft well
            written articles, optimize for SEO, and then publish directly to
            your site It's not just 'writing an article', it's automating your
            whole content marketing strategy.
          </p>
          <button className="bg-[#e7492b] rounded-[5px] w-[200px] san text-[1.1rem] font-medium px-3 py-3 mt-4 hover:bg-[#151313]">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}
