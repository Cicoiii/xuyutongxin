import React from 'react'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          让科技更有温度
          <br className='sm:block hidden' />
          让沟通更有力量
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          序语同心，以科技为桥、以关怀为本，打破沟通壁垒，重构表达方式，助力听障人士跨越职场障碍，融入社会，在无声处绽放属于自己的光芒。
        </p>
        <Button styles='mt-10' />
      </div>

      <div className={layout.sectionImg}>
        <div className='relative w-full h-[360px] flex justify-center items-center gap-4'>
          {/* 第三层图片 */}
          <div className="relative w-[220px] h-[300px] transition-all duration-500 hover:scale-110 transform -rotate-2 group">
            <img
              src={qingyun}
              alt='qingyun'
              className='w-full h-full object-cover rounded-xl'
            />
            <div className="absolute inset-0 rounded-xl border border-white/20 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 shadow-lg group-hover:shadow-xl transition-all duration-300" />
          </div>

          {/* 第二层图片 */}
          <div className="relative w-[240px] h-[320px] z-10 transition-all duration-500 hover:scale-110 transform rotate-0 group">
            <img
              src={silence}
              alt='silence'
              className='w-full h-full object-cover rounded-xl'
            />
            <div className="absolute inset-0 rounded-xl border border-white/20 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 shadow-lg group-hover:shadow-xl transition-all duration-300" />
          </div>

          {/* 第一层图片 */}
          <div className="relative w-[220px] h-[300px] transition-all duration-500 hover:scale-110 transform rotate-2 group">
            <img
              src={wusheng}
              alt='wusheng'
              className='w-full h-full object-cover rounded-xl'
            />
            <div className="absolute inset-0 rounded-xl border border-white/20 bg-gradient-to-br from-purple-500/5 to-blue-500/5 shadow-lg group-hover:shadow-xl transition-all duration-300" />
          </div>
        </div>

        {/* 背景光效 */}
        <div className='absolute z-[0] -left-[20%] top-0 w-[40%] h-[40%] rounded-full white__gradient opacity-30 blur-3xl' />
        <div className='absolute z-[0] -left-[25%] bottom-0 w-[40%] h-[40%] rounded-full pink__gradient opacity-20 blur-3xl' />
      </div>
      {/* 底部蓝色色团 */}
      <div className='absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-40'/>
    </section>
  )
}

export default CardDeal 