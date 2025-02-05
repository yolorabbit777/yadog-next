
export default function HeaderButton({text,isActive, onClick}: {text: string, isActive: boolean , onClick: () => void}) {
  return (
    <button onClick={() => onClick()} className={` rounded-[30px] py-0 px-3 ${isActive && 'border-[2px] border-white bg-gradient-to-b from-[#FDBC73] to-[#CD7209]'} `} >
      <span className="font-sans text-shadow-md tracking-wide text-white text-[20px] font-[900] text-stroke">{text}</span>
    </button>
  );
}
