import React from 'react'

export default function Footer_1_0() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 text-center">
        <p className="text-sm md:text-md my-1">© 2023 Your Company. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2 px-2 text-sm md:text-base">
          <a href="#" className="text-gray-600 hover:text-gray-700">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-gray-700">Terms of Service</a>
          <a href="#" className="text-gray-600 hover:text-gray-700">Contact Us</a>
        </div>
    </footer>
  )
}
