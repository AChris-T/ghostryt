/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';

export default function page() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="flex flex-col h-full gap-8 px-2 py-8 text-black bg-white shadow-lg md:px-4 rounde-lg poppins lg:px-6">
      <h3 className="text-[#161E54] text-2xl font-medium">Generate Keyword</h3>
      <div className="border-b-[1px] pb-10">
        <h3 className="text-[#303030] ">
          Unlock the power of SEO with our keyword generator, designed to help
          you create blog posts that rank higher and reach your target audience.
          Simply input your topic, and we'll provide you with tailored keywords
          to enhance your blog's visibility and drive traffic effortlessly.
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <label>Topic or Primary Idea</label>
        <input
          className="border-[1px] h-[60px] px-4 rounded-md focus:outline-none "
          placeholder="Enter"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="flex justify-end ">
          <button
            disabled={!inputValue.trim()}
            className="bg-[#e7492b] disabled:bg-gray-400 text-white px-16 py-4 rounded-md"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
