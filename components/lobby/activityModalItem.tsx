import Image from "next/image";

export default function ActivityModalItem({text, image, startDate, endDate}: {text: string, image: string, startDate: string, endDate: string}) {
  return (
      <button className="rounded-[25px] mt-3 flex flex-row justify-start items-end relative w-full h-[182px]">
          <Image src={`${image}`} className='obtain-cover h-full w-full rounded-[20px] absolute -z-1' alt="footer" width={500} height={1} />
          <div className="z-[20] p-2 pb-1">
            <p className="text-[18px] text-white font-black text-stroke">{text}</p>
            <p className="text-[#FFBE3F] text-[13px] font-bold">{startDate} ~ {endDate}</p>
          </div>
      </button>
  );
}
