import React from 'react'
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { services } from '../constants'
import{ fadeIn, textVariant} from '../utils/motion'
// import { scale } from 'maath/dist/declarations/src/vector2'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right", "spring", 0.5*index, 5.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-slate-300 dark:bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='dark:text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
      variants={fadeIn('','',0.1,1)}
      className='mt-4 dark:text-secondary text-[#6d6d6d] text-[17px] max-w-3xl leading-[30px]'
      >
        I am a versatile full-stack developer with expertise in building dynamic, responsive applications using React.js, Tailwind CSS, and TypeScript, combined with backend proficiency in Node.js, Express.js, and MongoDB for efficient API integration and database management. I specialize in optimizing performance, implementing secure authentication systems, and integrating advanced 3D visuals with Three.js. My experience extends to mobile development with Flutter, API consumption, and real-time data fetching, as well as desktop application development using JavaFX and FXML. This broad skill set enables me to create seamless, user-centric web and mobile applications.
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index)=>(
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")