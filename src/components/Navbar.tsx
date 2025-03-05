import Link from "next/link";
import React from "react";
import ContactMe from "./CalendlyEmbed";

const NavBar = () => {
  return (
    <nav className="py-4 px-6 md:px-12 lg:px-20 flex justify-between items-center border-b border-gray-100">
      <div className="font-medium">Magenta</div>
      <div className="flex items-center space-x-8">
        <Link
          href="#projects"
          className="text-sm hover:text-primary transition-colors"
        >
          Projects
        </Link>
        <Link
          href="#experience"
          className="text-sm hover:text-primary transition-colors"
        >
          Experience
        </Link>
        <ContactMe />
      </div>
    </nav>
  );
};

export default NavBar;
