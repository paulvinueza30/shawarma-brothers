"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ModeToggle from "./ui/modetoggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact-us" },
  ];

  return (
    <header className="bg-white dark:bg-black shadow-md fixed top-0 left-0 w-full z-50 h-24 flex justify-center items-center">
      <div className="container mx-auto px-4 flex justify-between items-center px-[15px] md:px-[60px]">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-customRed">
            Shawarma Brothers
          </span>
        </Link>

        {/* Centered Desktop Navigation */}
        <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xl text-customRed hover:text-customDRed transition duration-150 ease-in-out py-1 pt-2" // Added pt-2 for 8px top padding
            >
              {item.name}
            </Link>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-amber-900">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-amber-100 md:hidden">
          <div className="flex justify-end p-6 px-[15px]">
            <button onClick={toggleMenu} className="text-amber-900">
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-8 pt-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl text-amber-900 hover:text-amber-700 transition duration-150 ease-in-out"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <ModeToggle />
          </nav>
        </div>
      )}
    </header>
  );
}
