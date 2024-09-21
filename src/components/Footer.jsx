import React from 'react'
import icon3 from "../images/icon3.png"
import icon2 from "../images/icon2.png"

function Footer() {
  return (
    <footer className='flex justify-between p-4 bg-gray-800 mt-20 items-center bottom-0'>
      <div className='text-white ml-8'>
        <p>&copy;2025</p>
        <p>All rights are reserved.</p>
      </div>
      <div className='text-white mr-6'>
        <p className='text-center'>Follow Me</p>
        <div className='flex space-x-4 mt-3'>
            <a href="https://github.com/BhuvanMM" target='_blank'>
                <img src={icon3} alt="icon1" width="40px" height="40px"/>
            </a>
            <a href="https://www.linkedin.com/in/bhuvan-m-m-6b370a259/" target='_blank'>
                <img src={icon2} alt="icon2" width="40px" height="40px"/>
            </a>
            
        </div>
      </div>
    </footer>
  )
}

export default Footer
