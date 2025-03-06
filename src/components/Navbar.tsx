"use client";

import Link from "next/link";
import { useState } from "react";
import ContactMe from "./CalendlyEmbed";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="py-4 px-6 md:px-12 lg:px-20 flex justify-between items-center border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300 z-100">
      <div className="font-medium text-lg">bhavyagor.eth</div>
      <div className="hidden md:flex items-center space-x-8">
        <NavLinks />
      </div>

      <div className="md:hidden">
        <MobileMenu />
      </div>
    </nav>
  );
};

const NavLinks = () => (
  <>
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
  </>
);

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild title="">
        <Button variant="ghost" className="p-2">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col space-y-6 p-6">
        <SheetTitle></SheetTitle>
        <NavLinks />
      </SheetContent>
    </Sheet>
  );
};

export default NavBar;
