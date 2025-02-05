'use client';
import AwardItem from "@/components/lobby/awardItem";

export default function FavouriteContent() {
  return (
    <div className="flex flex-col w-full mt-[60px]">
      
        <div className="w-full gap-4 pt-7 flex flex-rows h-[280px]">
                <AwardItem rowSpan="row-span-2" colSpan={1} />
                <AwardItem rowSpan="row-span-1" colSpan={1} />
        </div>
        {/* <div className="w-full gap-4 pt-7  grid grid-cols-3 h-[180px]">
                <AwardItem rowSpan={1} colSpan={1} />
                <AwardItem rowSpan={1} colSpan={1} />
                <AwardItem rowSpan={1} colSpan={1} />
                <AwardItem rowSpan={1} colSpan={1} />
                <AwardItem rowSpan={1} colSpan={1} />
                <AwardItem rowSpan={1} colSpan={1} />
                <AwardItem rowSpan={1} colSpan={1} />
                <AwardItem rowSpan={1} colSpan={1} />
                <AwardItem rowSpan={1} colSpan={1} />
        </div> */}
    </div>
  );
}
