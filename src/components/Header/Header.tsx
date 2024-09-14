import Logo from "@/assets/logo.png";
import LogoButton from "../ui/LogoButton";
import { Mail, User } from "lucide-react";

type HeaderProps = {
  isHamMenuOpen: boolean;
}

const Header = ({ isHamMenuOpen }: HeaderProps) => {
  return (
    <div className={`md:h-[72px] h-14 w-full flex items-center justify-between`}>
        <img src={Logo} alt="Logo" className={`md:w-[142px] w-[124px]  ${isHamMenuOpen ? "fixed left-4" : ""}`} />
        <div className="flex">
            <LogoButton 
              icon={<User />}
              buttonText="Přihlásit"
              variant="noSolid"
              className="mr-2 hidden md:block"
            />
            <LogoButton 
              icon={<Mail />}
              buttonText="Newsletter"
              className="hidden md:block"           
            />
            <LogoButton 
              icon={<User />}
              buttonText=""
              className={`md:hidden ${isHamMenuOpen ? "hidden" : "block bg-inherit text-black absolute right-4 top-2"} `}
              variant="noText"           
            />
        </div>
    </div>
  )
}

export default Header;