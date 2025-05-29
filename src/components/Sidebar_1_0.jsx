import React, { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 fixed top-4 right-4 z-50 bg-gray-100 rounded-md shadow-md"
      >
        <Bars3Icon className="h-6 w-6 text-gray-800" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
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
    </>
  );
}