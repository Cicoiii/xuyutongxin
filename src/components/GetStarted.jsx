import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-r from-[#0066FF] to-[#00CCFF] p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-gradient-to-r from-[#0066FF] to-[#00CCFF] w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-white'>Get</span>
          </p>
          <img
            src={arrowUp}
            alt='arrow'
            className='w-[23px] h-[23px] object-contain invert brightness-0 invert'
          />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-white'>Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted
