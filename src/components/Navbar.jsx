import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <div className='flex items-center'>
        <img src={logo} alt='序语同心' className='w-[60px] h-[47px] object-contain'/>
        <span className='ml-2 font-poppins font-semibold text-[20px] text-[#0066FF]/80'>序语同心</span>
      </div>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-[#333333] relative group ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <a href={`#${nav.id}`} className='block py-2 transition-all duration-300 hover:translate-y-[-2px]'>
              {nav.title}
              <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#0066FF] transition-all duration-300 group-hover:w-full'></span>
            </a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((previous) => !previous)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, i) => (
              <li 
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] relative group ${
                  i === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-white`}
              >
                <a href={`#${nav.id}`} className='block py-2 transition-all duration-300 hover:translate-y-[-2px]'>
                  {nav.title}
                  <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#0066FF] transition-all duration-300 group-hover:w-full'></span>
                </a>
              </li>        
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
