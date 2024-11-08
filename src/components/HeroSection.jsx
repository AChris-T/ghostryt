import React from 'react';

export default function HeroSection() {
  return (
    <div className="h-full ">
      <div className="flex flex-col items-center justify-center gap-3 text-white Hero">
        <h3 className="text-[3rem] font-bold md:w-[600px] w-[95%] text-center plus leading-tight">
          {' '}
          Automate Your BLOG in 10 Minutes Or Less
        </h3>
        <h2 className="md:w-[700px] font-normal text-[#a6a6a6] san w-[80%] text-[1.2rem] text-center">
          Introducing GhostRYT, the AI agent powered software that generates
          daily AI-written blog posts for the Ghost.org website platform.
        </h2>
        <button className="bg-[#e7492b] rounded-[5px] san text-[1.1rem] font-medium px-12 py-3 mt-4 hover:bg-[#151313]">
          Get Started Today
        </button>
      </div>
    </div>
  );
}
