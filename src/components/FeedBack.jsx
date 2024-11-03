/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { FaRegStar } from 'react-icons/fa';

export default function FeedBack() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-32 py-28">
      <h3 className="text-[#e7492b] text-[1rem] font-normal san">
        CLIENTS FEEDBACK
      </h3>
      <div className="bg-[#151313] flex-col gap-10 flex md:w-[700px] justify-center items-center rounded-[10px] ">
        <div className="mt-[-70px]">
          <Image
            src="/user.png"
            alt=""
            width={140}
            height={140}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-center leading-tight justify-normal">
          <p className="font-semibold san text-[1.2rem]">Mike Hardenbrook</p>
          <p className="font-light san text-[1rem]">COO, PhoneSites</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-3 px-10 mb-12">
          <Image src="/star.png" alt="" width={150} height={20} />
          <p className="font-normal san text-[1.4rem] text-center">
            "GhostRYT is what we all dreamed AI would be like. Just connect it
            to your Ghost blog, give it a list of keywords, then watch it
            publish SEO optimized articles for you day after day with zero human
            input."
          </p>
        </div>
      </div>
    </div>
  );
}
