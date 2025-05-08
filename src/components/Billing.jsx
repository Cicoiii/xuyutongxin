import React from 'react'
import { wusheng, silence, qingyun, research, find, profile, tech, value } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className="relative">
      {/* 第一内容区块 - 图片展示 + 简介 */}
      <div className={`${layout.sectionReverse} mb-20`}>
        {/* 图片容器 */}
        <div className={`${layout.sectionImgReverse} perspective-1000`}>
          <div className="relative w-full h-[360px] flex justify-center items-center gap-4">
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

        {/* 文字区域 */}
        <div className={`${layout.sectionInfo} relative z-[1]`}>
          <h2 className={`${styles.heading2} text-[#333333]`}>
            打破沟通壁垒
            <br />
            平等就业新征程
          </h2>
          <div className="space-y-4 mt-5 max-w-[470px]">
            <p className={`${styles.paragraph} text-[#333333] leading-relaxed`}>
              在城市的喧嚣中，有这样一群人——他们听不见世界的声音，却渴望在人生的舞台上发光。
            </p>
            <p className={`${styles.paragraph} text-[#333333] leading-relaxed`}>
              <span className="text-[#333333] font-semibold">序语同心</span>，以科技为桥、以关怀为本，打破沟通壁垒，重构表达方式，助力听障人士跨越职场障碍，融入社会，在无声处绽放属于自己的光芒。
            </p>
          </div>
        </div>
      </div>

      {/* 第二内容区块 - 详细介绍 */}
      <div className={`${layout.section} mt-10 flex flex-col md:flex-row`}>
        <div className='flex-1 space-y-6'>
          <h2 className={`${styles.heading2} text-[#333333]`}>科技赋能，让沟通无碍</h2>
          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h3 className='font-semibold text-lg text-[#0066FF]'>技术创新</h3>
            <p className='text-[#333333] leading-relaxed'>
              首创"语序+语气"双调整技术，全球首个支持手语语序与语气同步优化的输入法插件，内嵌于主流输入法及企业平台，让听障人士打字更精准、表达更自然。
            </p>
          </div>
          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h3 className='font-semibold text-lg text-[#0066FF]'>无缝适配</h3>
            <p className='text-[#333333] leading-relaxed'>
              即装即用，无需学习，与输入法、外卖软件深度兼容，无需改变操作习惯，轻松实现无障碍沟通。
            </p>
          </div>
          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h3 className='font-semibold text-lg text-[#0066FF]'>真实需求驱动</h3>
            <p className='text-[#333333] leading-relaxed'>
              706位听障人士的共同选择，深入12个行业调研，精准捕捉用户痛点，持续优化功能，让科技真正服务于人。
            </p>
          </div>
          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h3 className='font-semibold text-lg text-[#0066FF]'>社会价值</h3>
            <p className='text-[#333333] leading-relaxed'>
              科技赋能，让无声世界更有声。
            </p>
          </div>
        </div>

        {/* 右侧照片展示架 */}
        <div className='flex-1 flex justify-center items-center mt-8 md:mt-0'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='relative w-[220px] h-[300px] bg-gray-200 rounded-xl overflow-hidden transition-all duration-500 hover:scale-110 transform hover:shadow-xl'>
              <img src={find} alt='find' className='w-full h-full object-cover' />
            </div>
            <div className='relative w-[220px] h-[300px] bg-gray-200 rounded-xl overflow-hidden transition-all duration-500 hover:scale-110 transform hover:shadow-xl'>
              <img src={profile} alt='profile' className='w-full h-full object-cover' />
            </div>
            <div className='relative w-[220px] h-[300px] bg-gray-200 rounded-xl overflow-hidden transition-all duration-500 hover:scale-110 transform hover:shadow-xl'>
              <img src={tech} alt='tech' className='w-full h-full object-cover' />
            </div>
            <div className='relative w-[220px] h-[300px] bg-gray-200 rounded-xl overflow-hidden transition-all duration-500 hover:scale-110 transform hover:shadow-xl'>
              <img src={value} alt='value' className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
      {/* 底部蓝色色团 */}
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>
    </section>
  )
}

export default Billing
