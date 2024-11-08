import Image from 'next/image';
import React from 'react';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <div className="flex flex-col bg-black md:px-22">
      <div className="flex flex-col justify-between gap-8 px-4 pt-24 lg:flex-row items center">
        <div className="flex flex-col w-full gap-4">
          <Image
            src="/log.png"
            alt=""
            className="flex object-cover "
            width={250}
            height={20}
          />
          <h3 className="text-[1.2rem] san font-medium px-2">Follow Us</h3>
          <div className="flex items-center gap-3 px-2">
            <FaXTwitter className="text-white" />
            <p className="text-white text-[0.9rem]">Coming Soon</p>
          </div>
          <div className="flex items-center gap-3 px-2">
            <FaLinkedin className="text-white" />
            <p className="text-white">Justin Brooke</p>
          </div>
          <div className="flex items-center gap-3 px-2">
            <FaYoutube className="text-white" />
            <p className="text-white">Coming Soon</p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 text-white">
          <h3 className="plus font-semibold text-[1.4rem]">Navigation</h3>
          <div className="flex flex-col gap-3 mt-4">
            <a href="" className="san text-[1.1rem] font-normal">
              Home
            </a>{' '}
            <a href="" className="san text-[1.1rem] font-normal">
              Pricing
            </a>
            <a href="" className="san text-[1.1rem] font-normal">
              Blog
            </a>
            <a href="" className="san text-[1.1rem] font-normal">
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <h3 className="plus font-semibold text-[1.4rem]">Guilds</h3>
          <div className="flex flex-col gap-3 mt-4">
            <a href="" className="san text-[1.1rem] font-normal">
              What Are AI Agents{' '}
            </a>{' '}
            <a href="" className="san text-[1.1rem] font-normal">
              Finding Your Keywords{' '}
            </a>
            <a href="" className="san text-[1.1rem] font-normal">
              Connecting Your APIs
            </a>
            <a href="" className="san text-[1.1rem] font-normal">
              GhostRYT For Beginners
            </a>
            <a href="" className="san text-[1.1rem] font-normal">
              Monetize Your Blog
            </a>
          </div>
        </div>{' '}
        <div className="flex flex-col w-full gap-4">
          <h3 className="plus font-semibold text-[1.4rem]">Subscribe Now!</h3>
          <div className="flex flex-col gap-3 mt-4 text-white">
            <p className="san text-[1rem] font-light">
              Get a free 7 day e-course on making money with blogging when you
              enter your email below..
            </p>
            <div className="flex gap-2">
              <input
                placeholder="Email Address"
                className="border-[1px] w-[200px] rounded-[5px]  px-4 py-3 bg-transparent focus:outline-none border-[#7a7a7a]"
              />
              <button className="bg-[#e7492b] w-[100px] rounded-[5px] san text-[1.1rem] font-medium  py-3  hover:bg-[#151313]">
                Submit
              </button>
            </div>
            <p className="san text-[0.8rem] font-light">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
        </div>
      </div>{' '}
      <div className="w-full px-6 mt-10">
        <hr className="w-full text-white" />
        <div className="flex flex-col-reverse items-center justify-between w-full mt-4 mb-4 lg:flex-row">
          <h3 className="text-[1rem] font-light san text-white">
            © 2024 by YourPublishing LLC. All rights reserved.
          </h3>
          <div className="flex flex-col gap-3 mb-2 lg:flex-row">
            <a href=" " className="text-[1rem] font-light san">
              Privacy Policy
            </a>
            <a href=" " className="text-[1rem] font-light san">
              Terms of Service
            </a>
            <a href=" " className="text-[1rem] font-light san">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
