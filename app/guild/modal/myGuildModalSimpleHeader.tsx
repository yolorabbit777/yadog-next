
export default function MyGuildModalSimpleHeader({header}: {header: string }) {
  return (
    <div className="bg-gradient-to-b rounded-t-lg flex justify-center py-4 items-center from-[#FEE385] to-[#EF932B]">
        <p className="text-white text-[25px] text-stroke font-black">{header}</p>
    </div>
  );
}
