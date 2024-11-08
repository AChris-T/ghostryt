import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMenu } from 'react-icons/io5';

export default function HomeNav() {
  return (
    <div className="bg-[#070707] md:px-2 lg:px-10 px-4    py-3 flex items-center justify-between">
      <Image
        src="/log.png"
        alt=""
        className="flex object-cover "
        width={250}
        height={20}
      />
      <div className="hidden gap-9 md:flex lg:pr-28">
        <Link href="/home" className="text-lg font-medium text-white san">
          Home
        </Link>
        <Link href="/pricing" className="text-lg font-medium text-white san">
          Pricing
        </Link>
        <Link href="/blog" className="text-lg font-medium text-white san">
          Blog
        </Link>
        <Link href="/contact" className="text-lg font-medium text-white san ">
          Contact
        </Link>
      </div>
      <button className="border-[0.5px] hidden md:flex   rounded-[5px]  px-10 py-4 text-lg font-medium ">
        Login
      </button>
      <IoMenu className="text-[#e7492b] bg-white flex md:hidden border-[0.5px] rounded-[7px] py-2 w-[80px] h-[40px]  font-medium" />
    </div>
  );
}
