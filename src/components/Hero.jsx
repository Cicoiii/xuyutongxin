import styles from '../style'
import { discount, robot, talk } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section
      id='home'
      className={`flex md:flex-row flex-col ${styles.paddingY} bg-white w-full`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className='flex flex-row items-center py-[6px] px-4 bg-gradient-to-r from-[#0066FF] to-[#00CCFF] rounded-[10px] mb-2'
        >
          <img
            src={discount}
            alt='discount'
            className='w-[35px] h-[35px]'
          />
          <p className={`${styles.paragraph} ml-2 text-white`}>
            <span>关注</span>
            <span className='text-white font-bold'>2800万</span>
            <span>听障人士</span>
            <span className='text-white font-bold'>就业困境</span>
          </p>
        </div>
        <div
          className='flex flex-row justify-between items-center w-full'
        >
          <h1
            className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-[#333333] ss:leading-[100.8px] leading-[75px]'
          >
            序语同心<br className='sm:block hidden' />{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00CCFF]'>科技破障无声</span>{" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>
        <h1
          className='font-poppins font-semibold ss:text-[68px] text-[52px] text-[#333333] ss:leading-[100px] leading-[75px] w-full'
        >
          听障关怀新体验
        </h1>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5 text-[#333333]`}
        >
          在无声的世界里，每一次交流都是挑战。序语同心，以创新科技为听障群体架起沟通的桥梁。借助智能语序纠正与深度学习技术，打破语言壁垒，让听障人士在职场和生活中自由表达，轻松融入社会。
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative animate__animated animate__fadeInRight`}
      >
        <div
          className="w-[80%] h-[80%] relative z-[5] rounded-3xl shadow-2xl overflow-hidden bg-[#F8FAFF] p-6 transition-all duration-300 hover:scale-105 hover:shadow-3xl group"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0066FF] to-[#00CCFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-[1px] rounded-3xl bg-[#F8FAFF]" />
          <img
            src={talk}
            alt='对话场景'
            className='w-full h-full object-cover relative z-10 rounded-3xl'
          />
        </div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;