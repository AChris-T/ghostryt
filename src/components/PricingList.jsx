import React from 'react';
import { GoDash } from 'react-icons/go';
import Featueres from './Featueres';

export default function PricingList() {
  return (
    <div className="flex flex-col w-full gap-10 text-black ">
      <div className="flex flex-col items-center gap-7">
        <h3 className="font-bold san text-[2.5rem] text-center w-full lg:w-[800px] leading-tight">
          For Less Than $2/day You Can Have a Writer Working For You Full Time
        </h3>
        <p className="font-normal san text-[1.125rem] text-center w-full leading-tight">
          Choose the best plan that fits your business goals
        </p>
      </div>
      <div className="flex flex-col items-center justify-between w-full md:flex-row">
        <div className="w-full lg:h-[500px] h-full   flex flex-col gap-6 px-8 py-5 hover:bg-[#eac3f7] border-[0.5px] border-black border-r-0 border-t-0">
          <p className=" text-[1.125rem] font-bold system ">Weekly</p>
          <div className="flex flex-col leading-snug system">
            <p className="text-[3.5rem] font-bold">$19</p>
            <p className="text-[1rem] font-bold">Per month</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <GoDash className="text-[20px]" />
              <p>Automate 1 weekly blog post on your Ghost blog.</p>
            </div>
            <div className="flex items-start gap-3">
              <GoDash className="text-[20px]" />
              <p>
                Ideal for beginners wanting to get started making money online.
              </p>
            </div>
          </div>
          <button className="bg-[#e7492b] px-4 py-4 text-white mt-20">
            Get Started
          </button>
        </div>
        <div className="w-full lg:h-[500px] h-full flex flex-col hover:bg-[#eac3f7] gap-6 px-8 py-5 border-[0.5px] border-black border-r-0 border-t-0">
          <p className=" text-[1.125rem] font-bold system ">Daily</p>
          <div className="flex flex-col leading-snug system">
            <p className="text-[3.5rem] font-bold">$29</p>
            <p className="text-[1rem] font-bold">Per month</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <GoDash className="text-[20px]" />
              <p>Automate 1 weekly blog post on your Ghost blog.</p>
            </div>
            <div className="flex items-start gap-3">
              <GoDash className="text-[20px]" />
              <p>
                Ideal for beginners wanting to get started making money online.
              </p>
            </div>
          </div>
          <button className="bg-[#e7492b] px-4 py-4 text-white mt-20">
            Get Started
          </button>
        </div>
        <div className="w-full lg:h-[500px]  h-full flex flex-col gap-6 px-8  hover:bg-[#eac3f7] py-5 border-[0.5px] border-black border-r-0 border-t-0">
          <p className=" text-[1.125rem] font-bold system ">Pro</p>
          <div className="flex flex-col leading-snug system">
            <p className="text-[3.5rem] font-bold">$49</p>
            <p className="text-[1rem] font-bold">Per month</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <GoDash className="text-[70px]" />
              <p>
                Automate up to 4 daily blog posts on your Ghost blog with 5
                unique writing styles to choose from AND up to 2,000 words for
                each post!
              </p>
            </div>
            <div className="flex items-start gap-3">
              <GoDash className="text-[20px]" />
              <p>For the SEO nerds </p>
            </div>
          </div>
          <button
            className="bg-[#e7492b]  px-4 py-4 text-white mt-[32px]
           lg:mt-14"
          >
            Get Started
          </button>
        </div>
      </div>
      <Featueres />
    </div>
  );
}
