'use client';

import Image from "next/image";


export default function KingsRankingFooter({setRankingModalShow}: {setRankingModalShow:(status: boolean) => void}) {


  return (
    <div className="fixed w-[500px] bottom-0 flex flex-col items-center">
        
        <Image src="/images/guild/dog@3x.png" alt="footer" className='absolute z-[400] -right-8' width={157} height={147} />
        <Image src="/images/guild/reward@3x.png" alt="footer" className='absolute z-[400] right-20 bottom-0' width={60} height={60} />
        <div className="absolute flex justify-center items-center gap-5 z-[400]">
            <button 
                onClick={() => setRankingModalShow(false)}
                className='w-[65px] h-[65px] rounded-full bg-black shadow-xl shadow-[#666]' >
                <Image src="/images/guild/closeVector.svg" alt="footer" className='transform transition-transform duration-300 hover:rotate-90' width={66} height={66} />
            </button>
            <button className="bg-gradient-to-b from-[#73FDE1] shadow-xl shadow-[#666] px-9 py-2 to-[#0C9286] border-[2px] border-white rounded-[30px]">
                <span className="text-white font-medium font-medium">活動榜</span>
            </button>
        </div>
        <Image src="/images/guild/moneymountain@3x.png" className='z-[200]' alt="footer" width={500} height={80} />
        
    </div>
  );
}
