import React from 'react';

export default function Demo() {
  return (
    <div className="flex flex-col gap-12 px-5 lg:flex-row demo">
      <h3 className="plus text-[1.8rem] md:text-[2.7rem] font-bold px-4 lg:w-[600px] ">
        Press Play For a Demo of GhostRYT
      </h3>
      <div className="flex items-center justify-center">
        <iframe
          height="315"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="shadow-lg lg:w-[560px] w-full"
        ></iframe>
      </div>
    </div>
  );
}
