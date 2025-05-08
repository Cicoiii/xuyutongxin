import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 px-8 bg-gradient-to-r from-[#0066FF] to-[#00CCFF] font-poppins font-medium text-[18px] text-white outline-none ${styles} rounded-[10px] transition-all duration-300 group-hover:bg-white group-hover:text-[#0066FF] group-hover:from-white group-hover:to-white`}>
      Get Started
    </button>
  )
}

export default Button
