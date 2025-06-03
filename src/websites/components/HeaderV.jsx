import React from 'react'

export default function HeaderV() {

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
  ]
  return (
    <>
      <header className='bg-orange-600 shadow-lg sticky top-0 z-50'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 items-center justify-between h-16 grid grid-cols-12 gap-4'>
          <div className='col-span-6 lg:col-span-2'>
            <a href="#" className='text-xl font-bold text-white'>
              Logo or Text
            </a>
          </div>
          <nav className='col-span-6 lg:col-span-7'>
            <ul className='hidden lg:flex justify-center space-x-4'>
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-orange-700 transition'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className='col-span-6 lg:col-span-3 flex justify-end items-center space-x-4'>
              
          </div>


          
        </div>
      </header>
    </>
  )
}
