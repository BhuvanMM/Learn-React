import React from 'react'

function NavBar() {
  return (
    <nav className='flex justify-between p-4 bg-gray-200 shadow-lg items-center'>
      <div className='text-lg font-semibold ml-4'>
        Learn|Ohub
      </div>
      <ul className='flex space-x-6 mr-4'>
        <li className='hover:bg-gray-300 p-2 rounded-md'><a href="/">Home</a></li>
        <li className='hover:bg-gray-300 p-2 rounded-md'><a href="/about">About</a></li>
        <li className='hover:bg-gray-300 p-2 rounded-md'><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default NavBar
