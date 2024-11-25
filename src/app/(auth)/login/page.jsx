/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { VscGithubInverted } from 'react-icons/vsc';

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pt-32 text-white bg-black">
      <h3 className="plus text-[30px]">Login</h3>
      <div className="flex  flex-col py-7 gap-5   shadow-lg w-[95%] md:w-[40%] px-5 rounded-md">
        <div className="flex items-center gap-1">
          <div className="bg-[#e7492b]  h-4 w-[2px] rounded-full"></div>
          <h3 className="san  text-[0.9rem] font-bold">Welcome</h3>
        </div>
        {/*   <div>
          <h3 className="plus text-[12px]">
            Fill in your details and click the login button
          </h3>
          <hr className="w-full text-gray-50" />
        </div> */}
        <form className="flex flex-col gap-4">
          <div className="flex flex-col w-full h-14">
            <div className="w-full border-[0.5px] h-full border-gray-200 px-4 rounded-md">
              <input
                className="w-full h-full text-base bg-transparent focus:outline-none san"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex flex-col w-full h-14">
            <div className="w-full border-[0.5px] h-full border-gray-200 bg-transparent px-4 rounded-md">
              <input
                className="w-full h-full text-base bg-transparent focus:outline-none san"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex justify-between px-1 my-2 ">
            <div className="flex items-center gap-1">
              <input type="checkbox" className="w-4 h-4 bg-transparent" />
              <p className="text-[15px] san text-gray-400">Remeber me</p>
            </div>
            <h3 className="text-[15px] san text-gray-400">forget password?</h3>
          </div>
          <button
            type="submit"
            className="bg-[#e7492b] text-white rounded-md py-2 px-4 text-[18px] font-semibold"
          >
            Login
          </button>
        </form>
        <div className="flex items-center justify-center gap-2">
          <div className="w-full h-[0.5px] mt-1 bg-gray-200"></div>
          <h3 className="plus">or</h3>
          <div className="w-full h-[0.5px] mt-1 bg-gray-200"></div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button className="px-2 py-2 bg-white rounded-full">
            <FcGoogle className="text-[20px]" />
          </button>
          <button className="px-2 py-2 bg-white rounded-full">
            <VscGithubInverted className="text-[20px] text-black" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-base san">
            Don't have an account?{' '}
            <Link href="/register" className="text-[#e7492b]">
              Sign Up
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
