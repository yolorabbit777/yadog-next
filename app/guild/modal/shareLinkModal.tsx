import Image from "next/image";
import MyGuildModalSimpleHeader from "./myGuildModalSimpleHeader";

export default function ShareLinkModal({setActive}: {setActive: (status: boolean) => void}) {
  return (
    <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-50 h-full ">
        <div className="w-[500px] bg-[#160133] relative flex justify-center items-center bg-opacity-80 h-full px-4">
            <button onClick={() => setActive(false)} >
                <Image src="/images/guild/modalclose.svg" className="absolute top-2 right-2" alt="footer" width={21} height={21} />
            </button>
            <div className="w-full rounded-[20px] ">
                <div className="p-[3px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-lg">
                    <MyGuildModalSimpleHeader header="分享名片" />
                    <div className="bg-[#150F20] bg-opacity-94 rounded-b-lg p-4 flex flex-col items-center">
                        <Image src="/images/guild/copylink@3x.png" alt="footer" width={110} height={110} />
                        <p className="text-[#FEE58D] text-[18px] font-black">複製連結</p>
                        <button 
                        onClick={() => setActive(false)} 
                        className="border-[3px] border-white rounded-[30px] py-2 px-10 bg-gradient-to-b from-[#FFFFFF] to-[#B6938A] mt-4">
                            <span className="text-[#523705] text-[15px] font-bold">確定</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
