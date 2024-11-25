import React from 'react';
import { HiOutlineArrowSmUp } from 'react-icons/hi';
import { IoMdPodium } from 'react-icons/io';

export default function page() {
  return (
    <div className="text-black flex md:flex-row flex-col px-4 gap-8 justify-between poppins mt-[40px] bg-white shadow-lg rounded-lg lg:px-12 py-8">
      <div className="flex items-center gap-5">
        <div className="bg-green-200 p-[22px] rounded-full">
          <IoMdPodium className="text-green-100 text-[34px]" />
        </div>
        <div className="flex flex-col">
          <h2 className="space-x-1 text-sm tracking-wide text-gray-200 ">
            Total Posts
          </h2>
          <h2 className="text-[#333333] text-[32px] font-semibold ">1,200</h2>
          <div className="flex items-center text-xs">
            <span className="text-green-100">
              <HiOutlineArrowSmUp className="text-[18px]" />
            </span>
            <h2 className="text-[#292D32] mt-1 ">
              <span className="text-green-100">16% </span>this month
            </h2>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="bg-green-200 p-[22px] rounded-full">
          <IoMdPodium className="text-green-100 text-[34px]" />
        </div>
        <div className="flex flex-col">
          <h2 className="space-x-1 text-sm tracking-wide text-gray-200 ">
            Total Posts
          </h2>
          <h2 className="text-[#333333] text-[32px] font-semibold ">1,200</h2>
          <div className="flex items-center text-xs">
            <span className="text-green-100">
              <HiOutlineArrowSmUp className="text-[18px]" />
            </span>
            <h2 className="text-[#292D32] mt-1 ">
              <span className="text-green-100">16% </span>this month
            </h2>
          </div>
        </div>
      </div>{' '}
      <div className="flex items-center gap-5">
        <div className="bg-green-200 p-[22px] rounded-full">
          <IoMdPodium className="text-green-100 text-[34px]" />
        </div>
        <div className="flex flex-col">
          <h2 className="space-x-1 text-sm tracking-wide text-gray-200 ">
            Total Posts
          </h2>
          <h2 className="text-[#333333] text-[32px] font-semibold ">1,200</h2>
          <div className="flex items-center text-xs">
            <span className="text-green-100">
              <HiOutlineArrowSmUp className="text-[18px]" />
            </span>
            <h2 className="text-[#292D32] mt-1 ">
              <span className="text-green-100">16% </span>this month
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
