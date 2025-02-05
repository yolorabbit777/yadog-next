'use client';
import Image from "next/image";
import AwardItem from "@/components/lobby/awardItem";
import DescriptionItemHeader from "@/components/guild/descriptionItemHeader";

export default function AllContent() {
  return (
    <div className="flex flex-col w-full mt-[60px]">
      <div className="w-full bg-gradient-to-b from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-[30px] p-2">
        <div className="relative w-full rounded-[30px] bg-gradient-to-b pt-10 from-[#5B0B90] to-[#052657] p-2 flex justify-center ">
            <div className="w-full gap-2 pt-7 grid grid-rows-2 grid-flow-col h-[280px]">
                <AwardItem rowSpan='row-span-2' colSpan={1} />
                <AwardItem rowSpan='row-span-1' colSpan={1} />
                <AwardItem rowSpan='row-span-1' colSpan={1} />
                <AwardItem rowSpan='row-span-1' colSpan={1} />
                <AwardItem rowSpan='row-span-1' colSpan={1} />
            </div>
            <Image src="/images/lobby/awardHeader@3x.png" className='absolute top-0 -translate-y-[60%] object-cover w-[276px] h-[116px]' alt="footer" width={130} height={130} />
        </div>
      </div>

        <div className={`relative w-full h-[90px] mt-8`}>
            <div className="relative text-center flex justify-start items-center translate-y-[25%]">
                <Image src="/images/lobby/score@3x.png" className='absolute object-contain' alt="footer" width={120} height={30} />
                <p className="ml-6 text-white font-black text-[15px] absolute z-[100] text-center">1,234,567</p> 
                <Image src="/images/lobby/hot@3x.png" className='absolute justify-self-start -ml-2' alt="footer" width={40} height={40} />
            </div>
            <Image src="/images/lobby/award1@3x.png" className='object-cover w-[200%] h-full rounded-[30px]' alt="footer" width={130} height={130} />
        </div>
        <div className="w-full flex justify-center flex-col items-center">
          <DescriptionItemHeader header="全部遊戲" />
        </div>
        <div className="w-full gap-4 pt-7 grid grid-rows-2 mt-9 grid-flow-col h-[200px]">
                <AwardItem rowSpan='row-span-2' colSpan={1} />
                <AwardItem rowSpan='row-span-1' colSpan={1} />
                <AwardItem rowSpan='row-span-1' colSpan={1} />
        </div>
        <div className="w-full gap-4 pt-7 flex flex-row h-[180px]">
                <AwardItem rowSpan='row-span-1' colSpan={1} />
                <AwardItem rowSpan='row-span-1' colSpan={1} />
                <AwardItem rowSpan='row-span-1' colSpan={1} />
        </div>
    </div>
  );
}
