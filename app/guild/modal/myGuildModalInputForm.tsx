
export default function MyGuildModalInputForm({header, detail, isInput}: {header: string, detail: string, isInput:boolean }) {
  return (
    <div className="flex w-full flex-col items-start gap-1">
      <p className="text-[18px] text-white font-bold">{header}</p>
      { !isInput ?
        <textarea
          value={detail}
          onChange={() => {}}
          className="w-full h-[157px] overflow-auto shadow-inner shadow-black bg-[#F9F0E0] rounded-[10px] text-[#523705] resize-none outline-none text-[13px] font-medium p-[10px]"
        />
        : 
        <input
          // value={detail}
          onChange={() => {}}
          placeholder={detail}
          className="w-full overflow-auto shadow-inner shadow-black bg-[#F9F0E0] rounded-[10px] text-[#523705] resize-none outline-none text-[13px] font-medium p-[10px]"
        />
      }
    </div>
  );
}