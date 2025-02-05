'use client';
import Image from "next/image";
import AwardItem from "@/components/lobby/awardItem";

export default function PrizePoolContent() {
  return (
    <div className="flex flex-col w-full mt-[80px] gap-[50px]">
      <div className="w-full bg-gradient-to-b from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-[30px] p-2">
        <div className="relative w-full rounded-[30px] bg-gradient-to-b pt-10 from-[#5B0B90] to-[#052657] p-2 flex justify-center ">
            <div className="w-full gap-2 pt-7 grid grid-rows-1 grid-flow-col ">
                <AwardItem rowSpan={'row-span-1'} colSpan={1} />
                <AwardItem rowSpan={'row-span-1'} colSpan={1} />
                <AwardItem rowSpan={'row-span-1'} colSpan={1} />
            </div>
            <div className="absolute top-0 -translate-y-[60%] flex items-center justify-center">
                <Image src="/images/lobby/score@3x.png" className=' object-contain w-[276px] h-[80px]' alt="footer" width={130} height={130} />
                <p className="absolute text-white text-[30px] font-black">1,234,567</p>
            </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-[30px] p-2">
        <div className="relative w-full rounded-[30px] bg-gradient-to-b pt-10 from-[#5B0B90] to-[#052657] p-2 flex justify-center ">
            <div className="w-full gap-2 pt-7 grid grid-rows-1 grid-flow-col ">
                <AwardItem rowSpan={'row-span-1'} colSpan={1} />
                <AwardItem rowSpan={'row-span-1'} colSpan={1} />
                <AwardItem rowSpan={'row-span-1'} colSpan={1} />
            </div>
            <div className="absolute top-0 -translate-y-[60%] flex items-center justify-center">
                <Image src="/images/lobby/score@3x.png" className=' object-contain w-[276px] h-[80px]' alt="footer" width={130} height={130} />
                <p className="absolute text-white text-[30px] font-black">1,234,567</p>
            </div>
        </div>
      </div>
    </div>
  );
}
