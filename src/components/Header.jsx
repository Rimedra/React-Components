import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


export default function Header(){
const [open, setOpen] = useState('false');
const navItems = [
  {
    label: 'Home Page', href: '#'
  },
  {
    label: 'Products', href: '#products'
  },
  {
    label: 'About Us', href: '#about'
  },
  {
    label: 'Contact', href: '#contact'
  },
];


    return(
    <>
        <header className="bg-white shadow-md stikcy top-0 z-50">
       {/* Logo / Brand */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between" >
        <a href="#" className="text-xl font-bold text-orange-600">Logo or Text</a>
        {/* Hamburger (mobile) */}
      <button className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none" 
      onClick={() => setOpen(!open)}
      aria-label="Menüyü Aç/Kapat"
      >
        {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
      </button>
      
      {/* Nav – Big Screen */}
      <nav className="hidden lg:flex space-x-4">
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
      </div>
       {/* Mobil menu (slide-down) */}
      {open && (
        <nav className="lg:hidden border-t border-gray-200 bg-white shadow-md">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
      
     </header>
    </>
    )
}