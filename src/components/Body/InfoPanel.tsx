
import { Building2, Globe, MapPin, Wallet } from "lucide-react";
import LogoButton from "../ui/LogoButton";

const InfoPanel = () => {
    return(
<div className="mt-4 w-full">

  <div className="flex mb-3">
    <div className="w-1/4 flex-shrink-0">
      <LogoButton
        icon={<Building2 className="w-4 h-4" />}
        variant="infoBtn"
        buttonText="Pořadatel:"
        className="cursor-default hover:opacity-100 md:text-base text-sm"
      />
    </div>
    <div className="w-3/4 md:ml-4 ml-12">
      <h1 className="font-semibold md:text-base text-sm text-left">
        ÚVN Praha, VLF UO, Společnost vojenské medicíny ČLS JEP
      </h1>
    </div>
  </div>

  <div className="flex mb-3">
    <div className="w-1/4 flex-shrink-0">
      <LogoButton
        icon={<Wallet className="w-4 h-4" />}
        variant="infoBtn"
        buttonText="Datum konání:"
        className="cursor-default hover:opacity-100 md:text-base text-sm whitespace-nowrap"
      />
    </div>
    <div className="w-3/4 md:ml-4 ml-12">
      <h1 className="font-semibold md:text-base text-sm text-left">
        7. - 9. října 2024
      </h1>
    </div>
  </div>

  <div className="flex mb-3">
    <div className="w-1/4 flex-shrink-0">
      <LogoButton
        icon={<MapPin className="w-4 h-4" />}
        variant="infoBtn"
        buttonText="Místo konání:"
        className="cursor-default hover:opacity-100  md:text-base text-sm whitespace-nowrap"
      />
    </div>
    <div className="w-3/4 md:ml-4 ml-12">
      <h1 className="text-left">
        <span className="font-semibold">Ústřední vojenská nemocnice</span> <br />
        U Vojenské nemocnice 1200, Praha 6, 169 02
      </h1>
    </div>
  </div>

  <div className="flex mb-3">
    <div className="w-1/4 flex-shrink-0">
      <LogoButton
        icon={<Globe className="w-4 h-4" />}
        variant="infoBtn"
        buttonText="Jazyk:"
        className="cursor-default hover:opacity-100  md:text-base text-sm"
      />
    </div>
    <div className="w-3/4 md:ml-4 ml-12">
      <h1 className="font-semibold text-left">Čeština</h1>
    </div>
  </div>

  <div className="flex">
    <div className="w-1/4 flex-shrink-0">
      <LogoButton
        icon={<Globe className="w-4 h-4" />}
        variant="infoBtn"
        buttonText="Web"
        className="cursor-default hover:opacity-100  md:text-base text-sm"
      />
    </div>
    <div className="w-3/4 md:ml-4 ml-12">
      <h1 className="font-semibold text-[#C1121E] underline break-all text-left">
        https://www.congressprague.cz/kongresy/vojaci68.html
      </h1>
    </div>
  </div>
</div>
)
}
export default InfoPanel;

   

