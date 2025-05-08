import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'
import download from '../assets/download.svg'
import gear from '../assets/gear.svg'
import commu from '../assets/commu.svg'
import { stats } from '../constants'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>无障碍沟通新纪元<br className='sm:block hidden'/>听障人士专属指南</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[#6b7280] leading-relaxed`}>
          序语同心系统重新定义了数字时代的无障碍沟通标准。我们的专利技术将复杂的手语表达语序转化为流畅自然的书面语言，为听障群体带来前所未有的数字包容体验。
          <br /><br />
          <span className="font-medium text-[#111827]">• 极简用户体验</span><br />
          无需专业培训，安装即用。我们的智能系统会自动适应每位用户的表达习惯，让技术真正服务于人
          <br /><br />
          <span className="font-medium text-[#111827]">• 全场景赋能</span><br />
          从日常社交到职场沟通，从在线教育到医疗服务，我们为听障人士搭建完整的数字生活基础设施，
          <a href="#" className="text-blue-500 underline">点击即用</a>
        </p>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        <div className='bg-white p-6 rounded-xl shadow-md mb-6' style={{ width: '100%' }}>
          <h3 className='font-semibold text-lg text-[#0066FF] flex items-center'>
            <img src={download} alt='download' className='w-6 h-6 mr-2' />
            第一步：轻松安装
          </h3>
          <p className='text-[#333333] leading-relaxed break-words'>
            手机端：在微信/支付宝搜索"序语同心"小程序，一键授权即可使用
            <br />
            网页端：访问官网下载插件，自动适配主流输入法与外卖软件
            <br />
            安装后自动识别常见输入法与外卖平台，无需复杂设置
          </p>
        </div>
        <div className='bg-white p-6 rounded-xl shadow-md mb-6' style={{ width: '100%' }}>
          <h3 className='font-semibold text-lg text-[#0066FF] flex items-center'>
            <img src={gear} alt='gear' className='w-6 h-6 mr-2' />
            第二步：智能设置
          </h3>
          <p className='text-[#333333] leading-relaxed break-words'>
            首次使用需同意隐私协议
            <br />
            从12个专业词库中选择匹配场景
            <br />
            系统自动记忆高频词汇和表达习惯，越用越精准
          </p>
        </div>
        <div className='bg-white p-6 rounded-xl shadow-md' style={{ width: '100%' }}>
          <h3 className='font-semibold text-lg text-[#0066FF] flex items-center'>
            <img src={commu} alt='commu' className='w-6 h-6 mr-2' />
            第三步：畅快沟通
          </h3>
          <p className='text-[#333333] leading-relaxed break-words'>
            输入时自动弹出智能悬浮框
            <br />
            实时优化语序结构，保留表达情感
            <br />
            点击即可采用优化后的语句，工作沟通效率提升31%
          </p>
        </div>
      </div>
    </section>
  )
}

export default Business
