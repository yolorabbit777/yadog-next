
export default function DescriptionItemHeader({header}: {header: string }) {
  return (
    <>
        <span className="bg-gradient-to-b from-[#DC9409] text-center to-[#FEE58D] translate-y-[50%] rounded-[30px] px-4">
            <span className="font-medium text-[15px] text-stroke-white">{header}</span>
        </span>
        <hr className="w-full bg-[#FFE0A5] bg-opacity-56" />
    </>
  );
}
