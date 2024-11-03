/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import { RiRobot2Line } from 'react-icons/ri';

export default function AboutCard() {
  return (
    <div className="flex flex-col justify-between gap-8 px-2 lg:px-10 lg:flex-row">
      <div className="w-[100%] bg-[#151313] rounded-xl gap-7 flex flex-col justify-center py-10 items-center">
        <Image src="/robot.png" alt="" width={64} height={64} />
        <h2 className="font-bold text-center plus text-[1.6rem] san w-[300px] leading-tight">
          Better Than ChatGPT Prompts
        </h2>
        <p className="text-center w-[350px] text-[#a6a6a6] san text-[1.1rem]">
          Our automated AI agents write many prompts for you which enables them
          to pump out high quality articles that pass the AI content detection
          tests.
        </p>
      </div>
      <div className="w-[100%] bg-[#151313] rounded-xl gap-7 flex flex-col justify-center py-10 items-center">
        <Image src="/human.png" alt="" width={64} height={64} />
        <h2 className="font-bold text-center plus text-[1.6rem] san w-[300px] leading-tight">
          Cheaper Than Human Writers
        </h2>
        <p className="text-center w-[350px] text-[#a6a6a6] san text-[1.1rem]">
          Because our automated AI agents are plugged right into the ChatGPT
          API, each article will only cost you $0.48 - $1.76 to publish. That's
          10x cheaper than hiring a human writer on Fiverr..
        </p>
      </div>
      <div className="w-[100%] bg-[#151313] rounded-xl gap-7 flex flex-col justify-center py-10 items-center">
        <Image src="/settings.png" alt="" width={64} height={64} />
        <h2 className="font-bold text-center plus text-[1.6rem] san w-[300px] leading-tight">
          Automate Your Content Marketing
        </h2>
        <p className="text-center w-[350px] text-[#a6a6a6] san text-[1.1rem]">
          Our automated AI agents write many prompts for you which enables them
          to pump out high quality articles that pass the AI content detection
          tests.
        </p>
      </div>
    </div>
  );
}
