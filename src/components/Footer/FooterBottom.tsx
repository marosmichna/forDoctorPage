import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterBottom = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between mx-auto md:px-10">
        <div className="text-[#5C5C5C] md:text-start text-sm text-center">
            <p className="mb-1">© 2008-2024 MeDitorial | ISSN 1803-6597</p>
            <p>Stránky proLékaře.cz jsou určeny výhradně odborníkům ve zdravotnictví. <span className="text-red-500 underline">Čtěte prohlášení</span> a <span className="text-red-500 underline">Zásady zpracování osobních údajů</span>.</p>
        </div>
        <div className="flex gap-3 md:mb-0 mb-6">
            <FaFacebook style={{ fontSize: '48px', width: '24px', height: '24px', color: 'gray' }} />
            <FaLinkedin style={{ fontSize: '48px', width: '24px', height: '24px', color: 'gray' }} />
            <FaXTwitter style={{ fontSize: '48px', width: '24px', height: '24px', color: 'gray' }} />
        </div>
    </div>
  )
}

export default FooterBottom;