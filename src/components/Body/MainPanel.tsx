import InfoPanel from './InfoPanel';
import ButtonPanel from './ButtonPanel';

const MainPanel = () => {
  return (
    <div className="md:w-[664px]">
        <p className="font-sans text-[#5C5C5C] md:text-xs">proLékaře .. Kalendář .. 5. Central European Endoscopic Ear Surgery Course</p>
        <h1 className="md:text-4xl text-xl mt-4 font-lora font-semibold">5. Central European Endoscopic Ear Surgery Course</h1>
        <button className="border-2 border-[#D6D6D6] rounded-md px-1 py-1 flex items-center justify-between mt-3">
        <div className="w-2 h-2 bg-[#1184C2] rounded-full" />
        <p className="text-xxs ml-1">KONGRES</p>
        </button>
        <InfoPanel />
        <div className="w-full mt-4 border-b-2 border-[#1414140F]" />
        <ButtonPanel />
  </div>
  )
}

export default MainPanel;