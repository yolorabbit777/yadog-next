
export default function SwitchButton({isActive, setActive}: {isActive: boolean, setActive: (active: boolean) => void}) {
 
  
  return (
    <button 
    onClick={() => setActive(!isActive)}
    className={ `w-[52px] h-[27px] flex rounded-[20px] + ${isActive ? 'bg-[#DC9409]' : 'bg-[#3E3E3E]'}`}>
        <div className={`w-[26px] h-[26px] rounded-full border border-[#CD7209] transition-transform duration-300 ${
          isActive ? 'bg-white transform translate-x-0' : 'bg-[#AFAFAF] transform translate-x-[24px]'
        }`}>
        </div>
    </button>
  );
}
