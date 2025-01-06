import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { BiSearch } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaMessage } from 'react-icons/fa6';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import { IoIosMenu } from 'react-icons/io';

export default function PageHeader() {
  return (
    <div className="flex poppins  flex-row h-[90px] w-full justify-between  md:px-0 items-center ">
      <div className="flex lg:hidden text-[20px]">
        <IoIosMenu />
      </div>
      <div className="border-[1px] rounded-md  px-3  justify-between pr-3 w-[243px] h-[44px] hidden md:flex items-center">
        <input className="h-full w-[90%] focus:outline-none px-2" />
        <BiSearch className="cursor-pointer" />
      </div>

      <div className="flex md:gap-6 gap-2  w-[230px] h-[40px] items-center md:px-4 justify-end rounded-lg">
        <IoMdNotificationsOutline className="w-[24px] h-[24px] text-[#B2B2B2]" />
        <FaMessage className="w-[20px] h-[20px] text-[#B2B2B2]" />
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-3">
            <Image
              src="/user.png"
              alt=""
              className="flex object-cover rounded-full"
              width={40}
              height={40}
            />
            <div className="flex items-center">
              <h3 className="text-base text-[#161E54] font-medium">Evano</h3>
              <MdOutlineKeyboardArrowDown className="text-[#737898] w-[24px] h-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
