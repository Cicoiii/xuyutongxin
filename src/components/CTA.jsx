import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-white rounded-[20px] box-shadow border border-[#0066FF]/10 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#0066FF] hover:to-[#00CCFF] hover:scale-105 group`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={`${styles.heading2} text-[#0066FF] group-hover:text-white`}>现在开始，让我们一起序语同心</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[#333333] group-hover:text-white`}>
          加入我们，共同构建无障碍沟通的未来，让每一位听障人士都能在职场和生活中自由表达。
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button/>
      </div>
    </section>
  )
}

export default CTA
