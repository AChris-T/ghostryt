import SmallCard from '@/components/SmallCard';
import React from 'react';
import { GrOverview } from 'react-icons/gr';
import { HiOutlineArrowSmUp } from 'react-icons/hi';
import { IoMdPodium } from 'react-icons/io';
import { VscReactions } from 'react-icons/vsc';
import { AiTwotoneSchedule } from 'react-icons/ai';

export default function page() {
  return (
    <div className="flex flex-col justify-between gap-8 px-4 py-8 text-black bg-white shadow-lg rounde-lg poppins lg:px-6">
      <h3 className="text-[#161E54] text-2xl font-medium">Dashboard</h3>
      <div className="flex flex-col justify-between md:flex-row gap-7">
        <div className="basis-2/3">
          <div className="flex flex-col gap-3 md:flex-row ">
            <SmallCard
              color={'#FFEFE7'}
              title={'Total Posts'}
              figure={20}
              veiw={'view all blogs'}
              reactions={<GrOverview className="text-[20px]" />}
            />
            <SmallCard
              color={'#E8F0FB'}
              title={'Scheduled Post'}
              figure={20}
              reactions={<AiTwotoneSchedule className="text-[20px]" />}
              veiw={'view plans'}
            />
            <SmallCard
              color={'#FDEBF9'}
              title={'Interactions'}
              figure={20}
              reactions={<VscReactions className="text-[24px]" />}
              veiw={'view interations'}
            />
          </div>
          <div className="flex  flex-col border-[1px] rounded-lg my-[20px] px-[20px]">
            <div className="flex text-[#161E54] font-medium  justify-between h-[60px] items-center">
              <h3 className="text-lg">Post</h3>
              <h3 className="text-xs font-normal">Date</h3>
            </div>
          </div>
        </div>
        <div className="flex-1  rounded-lg h-[264px] bg-[#1B204A] text-white w-full">
          <h2 className="h-[48px] rounded-t-lg px-[20px] py-3 bg-[#1e2563]">
            Recently Post
          </h2>
          <div className="px-[20px] justify-between  py-[26px] flex flex-col gap-2">
            <div className="flex flex-col gap-3">
              <h1 className="text-xs  text-[10px]">
                10.40 AM, Fri 10 Sept 2021
              </h1>
              <h3 className="text-lg font-medium">You Posted a New Post</h3>
              <p className="text-xs font-normal">
                Kindly check the requirements and terms of work and make sure
                everything is right.
              </p>
            </div>
            <h3 className="mt-10 text-sm">Today makes it 12 post this month</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
