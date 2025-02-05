
export default function DateNavigationItem({dataList, activeDateIndex, setActiveDateIndex}:{dataList:Array<string>,activeDateIndex:number, setActiveDateIndex:(val:number ) => void }) {
    return (
        <div className="rounded-[80px] p-3 mt-1 bg-white flex flex-row justify-between shadow-inner shadow-black items-center">
            {
                dataList.map((data, index) => 
                    <button 
                        key={index} 
                        onClick={() => setActiveDateIndex(index)} 
                        className={`rounded-[80px] px-4 py-1  ${activeDateIndex == index ? "text-white bg-gradient-to-r from-[#37C0FB] to-[#1D70DD] border-[2px] border-[#89E0FF]" : "text-black"}  `}>
                        <p className="text-[13px] font-bold">{data}</p>
                    </button>
                )
            }
        </div>
    )
}
