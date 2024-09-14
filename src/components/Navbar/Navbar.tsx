
import { Menu, X } from "lucide-react";
import { useState } from "react";
import SearchBar from "./SearchBar";

type NavbarProps = {
  isHamMenuOpen: boolean;
  setIsHamMenuOpen: (value: boolean) => void;
};

const Navbar = ({ isHamMenuOpen, setIsHamMenuOpen }: NavbarProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const NavLinks = [
    {
      name: "Články",
      subNameDom: [
        { subName: "Z medicíny", subLink: "/" },
        { subName: "Zo světa", subLink: "/" },
        { subName: "Z domova", subLink: "/" },
        { subName: "Rozhovory", subLink: "/" },
        { subName: "Technologie", subLink: "/" },
        { subName: "Napřič obory", subLink: "/" },
        { subName: "Názory", subLink: "/" },
        { subName: "Infografika", subLink: "/" },
        { subName: "Magazín", subLink: "/" },
      ],
      link: "/",
    },
    {
      name: "Časopisy",
      link: "/",
    },
    {
      name: "Obory",
      link: "/",
    },
    {
      name: "Vzdělávání",
      link: "/",
    },
    {
      name: "Kongresy",
      link: "/",
    },
    {
      name: "Videa",
      link: "/",
    },
    {
      name: "Podcasty",
      link: "/",
    },
    {
      name: "Praxe",
      link: "/",
    },
  ];

  const handleMenuClick = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  return (
    <nav className=" md:h-[72px]  absolute h-14 w-full  flex flex-col md:items-start items-center justify-center md:relative  top-0 left-0">
      {/* MAIN MENU */}
      <ul
        className={`flex flex-col md:flex-row gap-6 absolute md:static md:z-10 bg-white md:w-0 w-screen ${
          isHamMenuOpen ? "top-[110px] left-4 " : "hidden md:flex"
        }`}
      >
        {NavLinks.map((navLink) => (
          <li key={navLink.name} className="relative  z-50">
            <button
              className="text-[#141414] text-base"
              onClick={() => handleMenuClick(navLink.name)}
            >
              {navLink.name}
            </button>

            {/* SUBMENU */}
            {navLink.subNameDom && (
              <ul
                className={`${
                  openSubMenu === navLink.name
                    ? "block md:absolute md:top-14  md:h-[72px] whitespace-nowrap md:gap-6 md:left-0 items-center z-50"
                    : "hidden"
                }   flex flex-col md:flex-row`}
              >
                {navLink.subNameDom.map((subLink) => (
                  <li key={subLink.subName} className="md:py-2 w-full">
                    <a href={subLink.subLink} className="text-[#141414] text-base">
                      {subLink.subName}
                    </a>
                  </li>
                ))}
              </ul>
            )}  
          </li>
        ))}
      </ul>
      {/* SEARCH BAR */}
      <div className={`absolute md:right-0 ${isHamMenuOpen ? "top-16" : "hidden md:flex"}`}>
        <SearchBar isHamMenuOpen={isHamMenuOpen} />
      </div>

      {/* MOBILE MENU TOGGLE */}
      <div
        className={`absolute top-4 cursor-pointer md:hidden ${
          isHamMenuOpen ? "right-6" : "left-6"
        }`}
        onClick={() => setIsHamMenuOpen(!isHamMenuOpen)}
      >
        {isHamMenuOpen ? <X /> : <Menu />}
      </div>
    </nav>
  );
};

export default Navbar;






