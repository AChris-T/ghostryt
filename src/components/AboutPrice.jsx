import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function AboutPrice() {
  return (
    <div className="flex flex-col items-center justify-between lg:flex-row">
      <Image
        src="/newceo.png"
        alt=""
        width={500}
        height={10}
        className="w-[400px] mb-5"
      />
      <div className=" justify-center lg:items-start items-center lg:item-start gap-10 flex flex-col md:w-[500px]">
        <div className="flex">
          <FaStar className="text-black text-[1.5rem]" />
          <FaStar className="text-black text-[1.5rem]" />
          <FaStar className="text-black text-[1.5rem]" />
          <FaStar className="text-black text-[1.5rem]" />
        </div>
        <h2 className="text-[1.5rem] system font-bold text-black">
          GhostRYT is what we all dreamed AI would be like. Just connect it to
          your Ghost blog, give it a list of keywords, then watch it publish
          SEO optimized articles for you day after day with zero human input.
        </h2>
        <div className="flex w-[150px] text-black flex-col leading-snug border-r-[1px] border-black">
          <h3 className="text-[1rem] font-semibold system">Mike Hardenbrook</h3>
          <p className="text-[1rem] font-normal system">CEO, Phonesites</p>
        </div>
      </div>
    </div>
  );
}
