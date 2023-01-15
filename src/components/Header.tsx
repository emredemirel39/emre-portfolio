import React, { FC, useState } from "react";

interface IProps {
  handleMouseMove: Function;
}

const Header: FC<IProps> = ({ handleMouseMove }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navLinks: Array<String> = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contacts",
  ];

  return (
    <header
      onMouseMove={(e) => handleMouseMove(e)}
      className="fixed top-0 w-screen bg-[#1d0e15]/10 backdrop-blur h-12 z-50 shadow-md text-white"
    >
      <div className="container mx-auto h-full flex px-2 justify-between items-center">
        <h1>EMRE</h1>
        <nav>
          <ul className="hidden md:visible md:flex justify-center gap-4">
            {navLinks.map((label, id) => (
              <li key={`nav-${label}`}>
                {" "}
                <a href={`#${id + 1}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Mobile Menu Icon */}
        <button
          className="flex flex-col h-8 w-8 justify-center items-center group md:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 flex items-center justify-center relative">
            <span
              className={`${
                isMobileMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
              } transform ease-in-out duration-1000 transition w-full h-0.5 bg-current absolute`}
            />
            <span
              className={`${
                isMobileMenuOpen ? "opacity-0 translate-x-3" : "opacity-100"
              } transform ease-in-out duration-1000 transition w-full h-0.5 bg-current absolute`}
            />
            <span
              className={`${
                isMobileMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
              } transform ease-in-out duration-1000 transition w-full h-0.5 bg-current absolute`}
            />
          </div>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`transform ease-in-out duration-700 transition text-center shadow bg-[#1d0e15]/90 backdrop-blur-xl 
        md:hidden ${
          isMobileMenuOpen
            ? "h-fit opacity-100 "
            : "h-fit opacity-0 -translate-y-64 cursor-default pointer-events-none"
        }`}
      >
        <ul className="container mx-auto flex p-2 justify-center items-center flex-col gap-4">
          {navLinks.map((label, id) => (
            <li key={`nav-${label}`}>
              {" "}
              <a href={`#${id + 1}`}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
