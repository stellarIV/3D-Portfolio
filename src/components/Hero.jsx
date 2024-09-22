import { motion } from "framer-motion"
import { styles } from "../style"
import {ComputersCanvas} from './canvas'

const Hero = ({ theme, setTheme }) => {
  return (
    <section className="relative w-full h-screen mx-auto transition-all duration-500">
      <div className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5 h-[200px] z-10`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ff9b21]" />
          <div className="w-1 sm:h-60 h-40 bg-gradient-to-b from-[#ff9b21] to-transparent" />
        </div>
        <div className="text-black">
          <h1 className={`${styles.heroHeadText} text-[#333333] transition-all duration-500 `}>
            Hi! I'm <span className="text-[#ff9b21]">Biruk</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black dark:text-white-100 transition-all duration-500`}>
            I develop user interfaces, 
            <br /> web and mobile applications
          </p>
          <p className={`${styles.heroSubText} sm:hidden mt-2 text-black dark:text-white-100 transition-all duration-500`}>
            I am a Software Engenieer, <br /> inspided by race of Digitalizing <br /> our country!
            
          </p>
        </div>
      </div>
      
      <div className="cursor-grab absolute bottom-32 xs:bottom-9 h-[600px] md:h-[700px] w-full ">
        <br className="hidden md:flex" />
      {/* {
        theme === "dark" ? <ComputersCanvas /> : <ComputersCanvass />
      } */}
      <ComputersCanvas theme={theme}/>
      </div>

      <div className="absolute xs:bottom-2 bottom-20 w-full flex justify-center items-center">
        <a href="#about" className="z-10">
          <div className="w-[24px] h-[40px] rounded-3xl border-4 border-[#414040] dark:border-secondary flex justify-center duration-500 transition-all items-start p-1 ">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-2 h-2 rounded-full bg-black dark:bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
