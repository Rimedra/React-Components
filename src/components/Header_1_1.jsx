import React, { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Header_1_1() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { label: "Home Page", href: "#" },
    { label: "Products", href: "#products" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <header className="bg-orange-600 shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo / Brand */}
        <a href="#" className="text-xl font-bold text-white">
          Logo or Text
        </a>

        {/* Desktop NavBar */}
        <nav className="hidden lg:flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative inline-block font-medium group py-1.5 px-2.5"
            >
              <span className="absolute inset-0 w-full h-full transition transform translate-x-1 translate-y-1 bg-orange-700 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border border-orange-700 group-hover:bg-orange-50"></span>
              <span className="relative text-orange-700">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Icons & Controls */}
        <div className="flex items-center space-x-3">
          {/* Search Toggle */}
          <div className="relative flex items-center">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-white"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          </div>

          {/* User Dropdown */}
          <div className="relative group">
            <button className="p-2 text-white">
              <UserIcon className="h-6 w-6" />
            </button>
            <div
              className="
                 absolute right-0 mt-2 w-40
                 bg-orange-600 rounded-md shadow-lg
                 opacity-0 translate-y-2
                 transition-all duration-200 delay-200
                 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-150 group-hover:pointer-events-auto z-50
                "
            >
              <a
                href="#"
                className="block px-4 py-2 text-white hover:bg-orange-700"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-white hover:bg-orange-700"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-white hover:bg-orange-700"
              >
                Logout
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {open && (
        <nav className="lg:hidden bg-orange-600 shadow-md">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-3 text-white hover:bg-orange-700"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
       {searchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className="mr-2 h-9 w-full p-2 rounded-md border border-white bg-white text-gray-600"/>
            )}
    </header>
   
  );
}
