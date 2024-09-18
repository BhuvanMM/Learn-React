import React from 'react'

function Footer() {
  return (
    <footer className='flex justify-between p-4 bg-gray-800 mt-20'>
      <div className='text-white ml-8'>
        <p>&copy;2025</p>
        <p>All rights are reserved.</p>
      </div>
      <div className='text-white mr-6'>
        <p>Follow Me</p>
        <button className='p-2 bg-gray-600 rounded-md mt-2'>Subscribe</button>
      </div>
    </footer>
  )
}

export default Footer
