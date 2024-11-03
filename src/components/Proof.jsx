import Image from 'next/image';

/* eslint-disable react/no-unescaped-entities */
export default function Proof() {
  return (
    <div className="flex flex-col gap-14 px-4 justify-center items-center py-24 mt-32  bg-[#151313] ">
      <h3 className="font-bold plus text-[1.8rem] md:text-[2.7rem] lg:w-[1000px]  leading-tight text-center">
        Proof That GhostRYT Articles Pass AI Content Detectors as "Human
        Generated Content."
      </h3>
      <div className="w-[90%] md:w-ful flex justify-center items-center">
        <Image
          src="/bbt.png"
          alt=""
          width={900}
          height={900}
          className="rounded-[12px]"
        />
      </div>
    </div>
  );
}
