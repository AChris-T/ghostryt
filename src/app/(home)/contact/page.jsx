/* eslint-disable react/no-unescaped-entities */
import { TextField } from '@mui/material';
import { CiLocationOn } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';

export default function page() {
  return (
    <div className="px-4 text-black md:px-8 lg:px-28">
      <div className="flex flex-col justify-between gap-10 py-20 md:flex-row">
        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-[1rem] system">Connect</h3>
          <h2 className="text-[3rem] font-bold system">Get in touch</h2>
          <p className="text-[1.125rem] font-normal system leading-relaxed">
            Have any questions or need assistance? We're here to help!
          </p>
          <p className="text-[1.125rem] font-normal system lg:w-[600px] leading-relaxed">
            Our team monitors email during normal business hours within the US
            eastern timezone. We typically reply to all submissions within 12 –
            24 hours. We are here and happy to answer your questions.
          </p>
        </div>
        <div className="flex flex-col justify-start w-full gap-10">
          <div className="flex gap-4">
            <MdOutlineEmail className="text-[1.5rem] mt-1" />
            <div>
              <h2 className="text-[1.25rem] font-semibold">Email</h2>
              <a href="" className="font-normal text-[1rem] underline">
                support@ghostryt.com
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <IoCallOutline className="text-[1.5rem] mt-1" />
            <div>
              <h2 className="text-[1.25rem] font-semibold">Call or text</h2>
              <a href="" className="font-normal text-[1rem] underline">
                +1 (423) 905-9059
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <CiLocationOn className="text-[1.5rem] mt-1" />
            <div>
              <h2 className="text-[1.25rem] font-semibold">Office</h2>
              <a href="" className="font-normal text-[1rem] underline">
                8371 US 19E, Roan Mountain, TN 37687
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full text-center">
        <h3 className="font-semibold text-[1rem] system">Inquiry</h3>
        <h2 className="text-[3rem] font-bold system">Get in touch</h2>
        <p className="font-normal text-[1.125rem] ">
          Have a question or need further information? Contact us!
        </p>
        <form className="flex flex-col items-center justify-center w-full gap-5 my-10 ">
          <div className="flex flex-col w-full gap-4 justify-start lg:w-[600px] text-start">
            <label>Name</label>
            <input className="border-[1px] gap-4 w-full border-black h-[2.75rem]" />
          </div>
          <div className="flex flex-col gap-4 w-full justify-start lg:w-[600px] text-start">
            <label>Email</label>
            <input className="border-[1px] gap-4 w-full border-black h-[2.75rem]" />
          </div>
          <div className="flex flex-col gap-4 justify-start w-full lg:w-[600px] text-start">
            <label>Message</label>
            <textarea rows="5" className="border-[1px] w-full border-black " />
          </div>
          <div className="flex items-center justify-start gap-3 w-full lg:w-[600px] text-center">
            <input type="checkbox" className="w-[1.125rem] h-[1.125rem]" />
            <h3 className="text-[0.875rem] font-medium">
              I agree to the Terms
            </h3>
          </div>
          <button className="bg-[#e7492b] w-[150px] text-white rounded-[5px] san text-[1.1rem] font-medium  py-3  hover:bg-[#151313]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
