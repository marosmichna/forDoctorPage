import Logo from "@/assets/logo.png";

const FooterTop = () => {

  return (
    <div className="mx-auto md:h-32 h-60 flex md:flex-row flex-col items-center justify-center w-full md:justify-between px-10">
        <img 
            src={Logo} 
            alt="Logo" 
            className="w-32 md:mb-0 mb-8"
        />
        <div className="flex md:flex-row flex-col items-center md:gap-3 gap-2 text-sm">
            <p>Kontakt</p>
            <span className="hidden md:flex">|</span>
            <p>Inzerce</p>
            <span className="hidden md:flex">|</span>
            <p>O projektu</p>
            <span className="hidden md:flex">|</span>
            <p>Prohlašení o cookies</p>
            <span className="hidden md:flex">|</span>
            <p>Nastavení cookies</p>
        </div>
    </div>
  )
}

export default FooterTop;