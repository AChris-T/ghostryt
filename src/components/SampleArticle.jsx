import Image from 'next/image';

export default function SampleArticle() {
  return (
    <div className="bg-[#151313] px-4 flex flex-col gap-6 justify-center items-center md:py-24">
      <h3 className="font-bold plus text-center text-[2.3rem] md:text-[2.7rem]">
        Samples of GhostRYT Articles
      </h3>
      <p className=" md:w-[900px] san font-normal text-[#a6a6a6] text-[1.1rem] text-center">
        See for yourself the quality that our automated AI agents will produce
        for your blog. Our AI agents did everything from brainstorming the
        article ideas, headlines, the article, even picking out the images, and
        then published without ever needing a human to get involved.
      </p>
      <div className="flex flex-col w-full gap-6 mt-8 lg:flex-row">
        <div className="border-[1px] flex flex-col justify-between rounded-[12px] border-[#7a7a7a] px-8 py-5 h-[650px] w-full">
          <div className="flex flex-col gap-6">
            <Image
              src="/mon.png"
              alt=""
              width={600}
              height={800}
              className="rounded-[12px] md:h-72 lg:h-60 w-full"
            />
            <h3 className="font-semibold plus text-[1.5rem]">
              Turn Words into Wealth: 3 No-Fail Strategies to Profit from Your
              Blog
            </h3>
          </div>
          <button className="flex justify-start san font-medium text-[1.1rem] rounded-[8px] px-4 py-4 border-[#7a7a7a]  border-[1px] w-[150px]">
            Read more
          </button>
        </div>
        <div className="border-[1px] flex flex-col justify-between rounded-[12px] border-[#7a7a7a] px-8 py-5 h-[650px] w-full">
          <div className="flex flex-col gap-6">
            <Image
              src="/beg.png"
              alt=""
              width={600}
              height={800}
              className="rounded-[12px] md:h-72 lg:h-60 w-full"
            />
            <h3 className="font-semibold plus text-[1.5rem]">
              GhostRYT For Beginners
            </h3>
            <h3 className="font-normal plus text-[1.1rem]">
              GhostRyt helps creators automate their entire content marketing
              strategy
            </h3>
          </div>
          <button className="flex justify-start san font-medium text-[1.1rem] rounded-[8px] px-4 py-4 border-[#7a7a7a]  border-[1px] w-[150px]">
            Read more
          </button>
        </div>
        <div className="border-[1px] flex flex-col justify-between rounded-[12px] border-[#7a7a7a] px-8 py-5 h-[650px] w-full">
          <div className="flex flex-col gap-6">
            <Image
              src="/unlock.png"
              alt=""
              width={600}
              height={800}
              className="rounded-[12px] md:h-72 lg:h-60 w-full"
            />
            <h3 className="font-semibold plus text-[1.5rem]">
              Unlocking API Power: Easy Steps to Connect Your Blog with GhostRyt
            </h3>
            <h3 className="font-normal plus text-[1.1rem]">
              APIs make it possible for different softwares to integrate and
              work together, this is how GhostRyt is able to autoblog for you.
            </h3>
          </div>
          <button className="flex justify-start san font-medium text-[1.1rem] rounded-[8px] px-4 py-4 border-[#7a7a7a]  border-[1px] w-[150px]">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
