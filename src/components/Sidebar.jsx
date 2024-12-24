'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TbLayoutDashboard } from 'react-icons/tb';
import { FaKeyboard } from 'react-icons/fa';
import { IoMdPodium } from 'react-icons/io';
import { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoSettings } from 'react-icons/io5';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const pathname = usePathname();

  return (
    <div className="flex flex-col justify-between py-3 poppins">
      <div>
        <div className="flex items-center gap-2 px-7 ">
          <Image
            src="/logoImg.png"
            alt=""
            className="flex object-cover "
            width={40}
            height={20}
          />
          <h3 className="font-semibold  text-black  text-[26px] mt-3">
            GhostRYT
          </h3>
        </div>
        <div className="mt-[64px] px-5 flex flex-col gap-3">
          <Link
            href="/dashboard"
            className={`text-base px-4 flex rounded-lg  py-4 gap-3  text-gray-100  hover:text-red-100 items-center font-medium   ${
              pathname === '/dashboard' ? 'text-red-100' : 'text-gray-100'
            }`}
          >
            <TbLayoutDashboard className="text-[24px]" />
            Dashboard
          </Link>
          <Link
            href="/Generate_Keyword"
            className={`text-base px-4 flex rounded-lg  py-4 gap-3  text-gray-100 hover:text-red-100 items-center font-medium   ${
              pathname === '/Generate_Keyword'
                ? 'text-red-100'
                : 'text-gray-100'
            }`}
          >
            <FaKeyboard className="text-[24px]" />
            Generate Keyword
          </Link>
          <Link
            href="/home"
            className={`text-base px-4 flex rounded-lg  py-4 gap-3  text-gray-100 hover:text-white hover:bg-red-100 items-center font-medium  ${
              pathname === '/dashboard' ? 'text-gray-100' : 'text-gray-100'
            }`}
          >
            <IoMdPodium className="text-[24px]" />
            Posts
          </Link>
          <div>
            <button
              onClick={toggleExpand}
              className="flex items-center justify-between w-full px-4 py-3 text-gray-100"
            >
              <div className="flex items-center gap-3 text-base font-medium text-gray-100">
                {' '}
                <IoSettings />
                Settings
              </div>
              <span>
                {isExpanded ? (
                  <MdOutlineKeyboardArrowDown />
                ) : (
                  <MdOutlineKeyboardArrowRight />
                )}
              </span>
            </button>
            {isExpanded && (
              <div className="mt-2 mb-20 space-y-2">
                <Link
                  href="/home"
                  className={`text-lg px-4 flex rounded-lg  py-4 gap-3  text-gray-100 hover:text-white hover:bg-red-100 items-center font-medium  san ${
                    pathname === '/dashboard'
                      ? 'text-gray-100'
                      : 'text-gray-100'
                  }`}
                >
                  <IoMdPodium className="text-[24px]" />
                  Posts
                </Link>
                <Link
                  href="/home"
                  className={`text-lg px-4 flex rounded-lg  py-4 gap-3  text-gray-100 hover:text-white hover:bg-red-100 items-center font-medium  san ${
                    pathname === '/dashboard'
                      ? 'text-gray-100'
                      : 'text-gray-100'
                  }`}
                >
                  <IoMdPodium className="text-[24px]" />
                  Posts
                </Link>
                <Link
                  href="/home"
                  className={`text-lg px-4 flex rounded-lg  py-4 gap-3 text-gray-100 hover:text-white hover:bg-red-100 items-center font-medium  san ${
                    pathname === '/dashboard'
                      ? 'text-gray-100'
                      : 'text-gray-100'
                  }`}
                >
                  <IoMdPodium className="text-[24px] " />
                  Posts
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-8 cursor-pointer">
        <div className="flex items-center gap-3">
          <Image
            src="/user.png"
            alt=""
            className="flex object-cover rounded-full"
            width={40}
            height={40}
          />
          <div>
            <h3 className="text-sm font-medium">Evano</h3>
          </div>
        </div>
        <MdOutlineKeyboardArrowDown className="text-gray-100" />
      </div>
    </div>
  );
}
