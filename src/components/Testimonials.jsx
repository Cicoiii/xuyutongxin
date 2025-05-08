import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import Feedback from './Feedback'

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>
      <div className='w-full flex flex-col items-center relative z-[1] mb-16'>
        <h2 className={`${styles.heading2} text-center mb-4`}>
          合作伙伴 专业认可
        </h2>
        <p className={`${styles.paragraph} text-center text-[#666666] whitespace-nowrap`}>
          来自教育、公益、企业等领域的合作伙伴，共同见证序语同心在无障碍沟通领域的专业贡献
        </p>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card) => (
          <Feedback key={card.id} {...card} />
        ))}
      </div>      
    </section>
  )
}

export default Testimonials
