import React from 'react';
import { CiLink } from 'react-icons/ci';
import TimeLine from './TimeLine';

export default function Process() {
  return (
    <div className="flex flex-col justify-between w-full text-black md:flex-row">
      <div className="flex flex-col w-full gap-3">
        <h3 className="font-semibold san text-[1rem] text-center md:text-start">
          Truly Hands Free
        </h3>
        <h3 className="text-[3rem] text-center font-bold leading-tight md:text-start">
          The GhostRYT Process in a Nutshell...
        </h3>
      </div>
      <div className="w-full ">
        <div>
          <TimeLine />
        </div>
      </div>
    </div>
  );
}
