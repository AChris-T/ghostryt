import React from 'react';
import { FaCheck } from 'react-icons/fa';

export default function Featueres() {
  return (
    <div className="flex flex-col items-start justify-start text-start mt-[-20px]">
      <h3 className="text-[1.25rem] font-bold system">Features</h3>
      <div className="mt-[23px] w-full  overflow-x-auto">
        <table className="min-w-[800px] md:min-w-full popins ">
          <thead className="h-[68px] border-t-[1px] border-black">
            <tr className="justify-start text-black">
              <th className="px-4 rounded-tl-lg w-[250px] text-start text-base font-normal system">
                Plan
              </th>
              <th className="text-center w-[200px] text-base popins font-semibold system">
                Weekly
              </th>
              <th className="text-center w-[150px] text-base  font-semibold system">
                Daily
              </th>
              <th className="text-center border-r-0 w-[200px] text-base font-semibold system">
                Pro
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="text-start h-[72px] border-b-[#00000033] ">
              <td className="px-4 text-base font-normal text-start system">
                Passes AI Detection Scans
              </td>
              <td>
                <FaCheck className="flex items-center justify-center w-full " />
              </td>
              <td>
                <FaCheck className="flex items-center justify-center w-full " />
              </td>
              <td className="border-r-0">
                <FaCheck className="flex items-center justify-center w-full " />
              </td>
            </tr>
            <tr className="text-start h-[72px] border-b-[#00000033] ">
              <td className="px-4 text-base font-normal text-start system">
                Passes AI Detection Scans
              </td>
              <td>
                <FaCheck className="flex items-center justify-center w-full " />
              </td>
              <td>
                <FaCheck className="flex items-center justify-center w-full " />
              </td>
              <td className="border-r-0">
                <FaCheck className="flex items-center justify-center w-full " />
              </td>
            </tr>
            <tr className="text-start h-[72px] border-b-[#00000033] ">
              <td className="px-4 text-base font-normal text-start system">
                Passes AI Detection Scans
              </td>
              <td>
                <FaCheck className="flex items-center justify-center w-full " />
              </td>
              <td>
                <FaCheck className="flex items-center justify-center w-full " />
              </td>
              <td className="border-r-0">
                <FaCheck className="flex items-center justify-center w-full " />
              </td>
            </tr>
            <tr className="text-start h-[72px] border-b-[#00000033] ">
              <td className="px-4 text-base font-normal text-start system">
                Passes AI Detection Scans
              </td>
              <td>
                <FaCheck className="flex items-center justify-center w-full " />
              </td>
              <td>
                <FaCheck className="flex items-center justify-center w-full " />
              </td>
              <td className="border-r-0">
                <FaCheck className="flex items-center justify-center w-full " />
              </td>
            </tr>
            <tr className="text-start h-[72px] border-b-[#00000033] ">
              <td className="px-4 text-base font-normal text-start system">
                Passes AI Detection Scans
              </td>
              <td>
                <FaCheck className="flex items-center justify-center w-full " />
              </td>
              <td>
                <FaCheck className="flex items-center justify-center w-full " />
              </td>
              <td className="border-r-0">
                <FaCheck className="flex items-center justify-center w-full " />
              </td>
            </tr>
            <tr className="text-start h-[72px] border-b-[#00000033] ">
              <td className="px-4 text-base font-normal text-start system">
                Passes AI Detection Scans
              </td>
              <td>
                <FaCheck className="flex items-center justify-center w-full " />
              </td>
              <td>
                <FaCheck className="flex items-center justify-center w-full " />
              </td>
              <td className="border-r-0">
                <FaCheck className="flex items-center justify-center w-full " />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
