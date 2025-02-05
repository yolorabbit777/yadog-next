'use client';

import Image from "next/image";

export default function DefaultFooter() {

  return (
    <div className="fixed w-[500px] bottom-0 flex flex-col items-center">
        <Image src="/images/guild/dog@3x.png" alt="footer" className='absolute -right-8' width={157} height={147} />
        <Image src="/images/guild/reward@3x.png" alt="footer" className='absolute right-20 bottom-0' width={60} height={60} />
        <button className='w-[65px] h-[65px] absolute rounded-full bg-black' >
            <Image src="/images/guild/closeVector.svg" alt="footer" className='transform transition-transform duration-300 hover:rotate-90' width={66} height={66} />
        </button>
        <Image src="/images/guild/moneymountain@3x.png" className='' alt="footer" width={500} height={80} />
    </div>
  );
}
