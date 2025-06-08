import { Moon, Sun } from "lucide-react";

import { useContext, useState } from "react";
import { ThemeContext } from "../context/index";

import MenuButtonSvg from "../SVG/MenuButtonSvg";
import XButtonSvg from "../SVG/XButtonSvg";
import NavLink from "./NavLink";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skill" },
    { name: "My Works", href: "#works" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
            <h1 className="font-bold text-2xl text-slate-800 dark:text-slate-300 dark:hover:text-lime-600 hover:text-lime-900">
              <a href="#">Tanjim</a>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-4">
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex">
            {/* dark mode toggle button */}
            <button
              onClick={() => setDarkMode((darkMode) => !darkMode)}
              className="flex justify-center ml-4 w-12 p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Moon className="h-6 w-6" />
              ) : (
                <Sun fill="Yellow" className="h-6 w-6" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-lime-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <XButtonSvg className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuButtonSvg className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 dark:hover:text-lime-600 shadow-lg"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-lime-600 hover:bg-lime-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
