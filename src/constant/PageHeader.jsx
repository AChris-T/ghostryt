import React from 'react';
import { IoSearch } from 'react-icons/io5';

export default function PageHeader() {
  return (
    <div className="flex flex-row justify-between px-2 md:px-0 md:items-center ">
      <h3 className="text-2xl font-medium poppins">Hello Evano 👋🏼,</h3>
      <div className="hidden md:flex  w-[230px] h-[40px] items-center md:px-4 justify-center rounded-lg  bg-white shadow-lg">
        <button className=" bg-white  py-[10px]  text-white-200 h-full ">
          <IoSearch className="" />
        </button>
        <input
          placeholder="Search User"
          className="bg-transparent px-2 text-black-default text-[14px] h-[36px] focus:outline-none "
        />
      </div>
    </div>
  );
}
