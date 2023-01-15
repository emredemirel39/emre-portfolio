import React from "react";

const NavLinks = () => {
  const navLinks: Array<String> = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contacts",
  ];

  return (
    <ul className="flex justify-center gap-4">
      {navLinks.map((label, id) => (
        <li key={`nav-${label}`}>
          {" "}
          <a href={`#${id + 1}`}>{label}</a>{" "}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
