import About from '@/components/About';
import AboutPrice from '@/components/AboutPrice';
import FAQ from '@/components/FAQ';
import Featueres from '@/components/Featueres';
import PricingList from '@/components/PricingList';
import Process from '@/components/Process';
import TimeLine from '@/components/TimeLine';
import React from 'react';

export default function page() {
  return (
    <div className="flex flex-col gap-24 ">
      {' '}
      <div className="w-full h-[350px] price">
        <div className="flex flex-col items-center justify-center w-full h-full overlay">
          <h3 className="font-semibold text-center px-4 text-[1rem] text-white">
            ONE STEP BEFORE AUTOMATING YOUR BLOG...
          </h3>
          <h3 className="text-[3rem] text-white text-center md:text-[5rem] font-bold">
            Choose Your Plan
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-24 px-3 lg:px-24">
        <Process />
        <PricingList />
        <AboutPrice />
        <FAQ />
      </div>
    </div>
  );
}
