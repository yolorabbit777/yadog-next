
export default function MonthNavigation({dataList, activeDateIndex, setActiveDateIndex}:{dataList:Array<string>, activeDateIndex:number, setActiveDateIndex:(val:number) => void }) {
    return (
        <div className="h-full rounded-[80px] p-3 bg-[#F2E6CC] gap-2 flex bg-white justify-between shadow-inner shadow-black items-center">
            {
                dataList.map((data, index) => 
                    <button 
                        key={index} 
                        onClick={() => setActiveDateIndex(index)} 
                        className={`rounded-[80px] px-4 py-1  ${activeDateIndex == index && "bg-gradient-to-r from-[#FFDA57] to-[#EAB93C] border-[2px] border-[#EAB93C]"}  `}>
                            <p className="text-[13px] font-black text-white text-stroke">{data}</p>
                    </button>
                )
            }
        </div>
    )
}

