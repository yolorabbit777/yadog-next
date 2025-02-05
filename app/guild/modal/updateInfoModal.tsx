import Image from "next/image";
import MyGuildModalSimpleHeader from "./myGuildModalSimpleHeader";
import MyGuildModalInputForm from "./myGuildModalInputForm";

const guildInfoText = "1.貢獻回饋最高100%\n2.不定時加碼\n3.記得加入社群"
const customButtonName = "進入社群"
const customButtonLink = "https://www..........................................."

export default function UpdateInfoModal({setActive}: {setActive: (status: boolean) => void}) {
  return (
    <div className="fixed inset-0 flex justify-center items-center top-0 left-0 z-50 h-full ">
        <div className="w-[500px] bg-[#160133] relative flex justify-center items-center bg-opacity-80 h-full px-4">
            <button onClick={() => setActive(false)} >
                <Image src="/images/guild/modalclose.svg" className="absolute top-2 right-2" alt="footer" width={21} height={21} />
            </button>
            <div className="w-full rounded-[20px] ">
                <div className="p-[3px] bg-gradient-to-r from-[#DC9409] via-[#F9E0A9] to-[#DAB32B] rounded-lg">
                    <MyGuildModalSimpleHeader header="更新公會資訊" />
                    <div className="bg-[#150F20] bg-opacity-94 rounded-b-lg p-3 gap-6 flex flex-col items-center flex flex-row items-start">
                        <MyGuildModalInputForm header="公會簡介" detail={guildInfoText} isInput={false} />
                        <MyGuildModalInputForm header="客製按鈕名稱" detail={customButtonName} isInput={true} />
                        <MyGuildModalInputForm header="客製按鈕連結" detail={customButtonLink} isInput={true} />
                        <div className="flex flex-row justify-center items-center gap-8 mb-2">
                            <button 
                            onClick={() => setActive(false)} 
                            className="border-[3px] border-white rounded-[30px] py-2 px-10 bg-gradient-to-b from-[#FFFFFF] to-[#B6938A] mt-4">
                                <span className="text-[#523705] text-[15px] font-bold">取消</span>
                            </button>
                            <button 
                            onClick={() => setActive(false)} 
                            className="border-[3px] border-white rounded-[30px] flex flex-row items-center gap-2 py-[2px] px-5 bg-gradient-to-b from-[#73FDE1] to-[#0C9286] mt-4">
                                <Image src="/images/guild/footprinter@3x.png" className="" alt="footer" width={40} height={40} />
                                <span className="text-white text-[20px] text-stroke-wheet font-bold">500</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
