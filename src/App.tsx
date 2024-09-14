import { useState } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MainPanel from "./components/Body/MainPanel";
import ReklamPanel from "./components/Body/ReklamPanel";
import LogoButton from "./components/ui/LogoButton";
import { ChevronUp } from "lucide-react";
import FooterTop from "./components/Footer/FooterTop";
import FooterBottom from "./components/Footer/FooterBottom";

function App() {

  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="md:w-[1016px]">
        <Header isHamMenuOpen={isHamMenuOpen} />   
      </div>
      <div className="w-full border-b-2 border-[#1414140F]" />
      <div className="md:w-[1016px]">
        <Navbar isHamMenuOpen={isHamMenuOpen} setIsHamMenuOpen={setIsHamMenuOpen} />
      </div>
      <div className="md:block hidden w-full border-b-2 border-[#1414140F]" />
      <div className="md:w-[1016px] mt-11 flex md:flex-row flex-col md:justify-between mx-4 md:mx-0">
        <MainPanel />
        <ReklamPanel />
      </div>
      <div className="md:w-[1016px] w-full border-b-4 mt-16 mb:mt-24 border-[#C1121E]" />
      <div className="md:w-[1016px] h-11 md:ml-10 w-full flex items-center">
        <LogoButton 
          icon={<ChevronUp />}
          buttonText="ZPÁTKY NAHORU"
          variant="noSolid"
          className="text-xs text-black"
        />
      </div>
      <div className="md:w-[1016px] w-full border-b-2 border-[#A3A3A3]" />
      <div className="md:w-[1016px]">
        <FooterTop />
      </div>
      <div className="md:w-[1016px] w-full border-b-2 border-[#A3A3A3]" />
      <div className="md:w-[1016px] mt-6 mb-16">
        <FooterBottom />
      </div>
    </div>
  )
}

export default App;
