import React from 'react'
import { quotes } from '../assets'

const Feedback = ({ content, name, title }) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-white shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#0066FF] hover:to-[#00CCFF] hover:scale-105 group'>
      <img
        src={quotes}
        alt='引号'
        className='w-[42px] h-[27px] object-contain opacity-80'
      />
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-[#333333] my-10 group-hover:text-white'>
        {content}
      </p>
      <div className='flex flex-col'>
        <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-[#0066FF] group-hover:text-white'>{name}</h4>
        <p className='font-poppins font-normal text-[16px] leading-[24px] text-[#666666] group-hover:text-white/80'>{title}</p>
      </div>
    </div>
  )
}

export default Feedback
