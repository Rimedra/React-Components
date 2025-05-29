import React, { useState, useRef, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Header_1_4() {
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    {
      label: "Home Page",
      href: "#homepage",
    },
    {
      label: "Products",
      href: "#products",
    },
    {
      label: "About Us",
      href: "#about",
    },
    {
      label: "Contact",
      href: "#contact",
    },
    {
      label: "Blog",
      href: "#blog",
    },
    {
      label: "Services",
      href: "#services",
    },
  ];
  return (
    <>
      <header className="bg-gray-100 shadow-lg sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 items-center justify-between h-16 grid grid-cols-12 gap-4">
          {/* Logo / Brand */}
          <div className="col-span-6 lg:col-span-2">
            <a href="#" className="text-xl font-bold text-gray-800">
              Logo or Text
            </a>
          </div>
          {/* Nav – Big Screen */}
          <nav className="hidden lg:flex col-span-7 justify-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-700 hover:text-gray-100 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="col-span-6 lg:col-span-3 flex justify-end items-center space-x-4">
            {/* Search Toggle */}
            <div className="flex">
              {searchOpen && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="mr-2 h-9 w-full p-2 rounded-md border border-white bg-gray-100 text-gray-600"
                />
              )}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-black cursor-pointer"
              >
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
            </div>

            {/* User Dropdown */}
            <div className="relative" ref={ref}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="p-2 text-black focus:outline-none cursor-pointer"
              >
                <UserIcon className="h-6 w-6" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-100 border border-gray-200 rounded-md shadow-lg z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>

            {/*Nav Hamburger (mobile) */}
            <button className="lg:hidden cursor-pointer flex" onClick={() => setSidebarOpen(!open)}>
              <span className="h-6 w-6">
               
                  <Bars3Icon className="h-6 w-6" />
             
              </span>
            </button>
            {
              open && (
                <div
                  className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
                  onClick={() => setSidebarOpen(false)}
                ></div>
              )
            }
          </div>
        </div>
        {/* Mobile Nav Menu */}
        
       
                <div
                  className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
                >
                  <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <button onClick={() => setSidebarOpen(false)}>
                      <XMarkIcon className="h-6 w-6 text-gray-800" />
                    </button>
                  </div>
                  <nav className="p-4 space-y-2">
                    <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
                      Dashboard
                    </a>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
                      Profile
                    </a>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
                      Settings
                    </a>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
                      Logout
                    </a>
                  </nav>
                </div>
      
      </header>
    </>
  );
}
