import React, { useState } from 'react'
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";


export default function Header_1_2() {
    const [open, setOpen] = useState(false);
    const navItems = [
        {label: "Home Page", href:"#homepage"},
        {label: "Products", href:"#products"},
        {label: "About Us", href:"#about"},
        {label: "Contact", href:"#contact"},
        {label: "Blog", href:"#blog"},
        {label: "Services", href:"#services"},
    ]
  return (
    <>
        <header className='bg-gray-200 shadow-lg sticky top-0 z-50'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 items-center justify-between h-16 grid grid-cols-12 gap-4'>
                {/* Logo / Brand */}
                <a href="#" className='text-xl font-bold text-gray col-span-6 lg:col-span-2'>Logo or Text</a>

                {/* Nav – Big Screen */}
                <nav className='hidden lg:flex space-x-4 col-span-8 justify-center'>
                   {navItems.map((item) => (
                    <a key={item.label} 
                    href={item.href}
                    className='px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-700 hover:text-gray-100 transition'>
                        {item.label}

                    </a>
                   ))}
                </nav>

                {/*Nav Hamburger (mobile) */}
                <button className='lg:hidden p-2 rounded-md hover:bg-gray-100 flex col-span-6 lg:col-span-2 text-right justify-end' 
                onClick={() => setOpen(!open)}
                aria-label="Menüyü Aç/Kapat">
                    <span className='h-6 w-6'>
                         {open ? (
                            <XMarkIcon className="h-6 w-6" />
                            ) : (
                              <Bars3Icon className="h-6 w-6" />
                         )}
                    </span>
                    
                </button>
               
            </div>
            {/* Mobile Nav Menu */}
            {open && (
              <nav className="lg:hidden bg-gray-100 shadow-md">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-black hover:bg-gray-200"
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
