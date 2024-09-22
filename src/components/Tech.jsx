import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { staggerContainer, fadeIn, textVariant } from "../utils/motion"
import { styles } from "../style"


import Scene from './canvas/Orbit'
import { motion } from 'framer-motion'


const Tech = ({theme, setTheme}) => {
  return (
    <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Skills I have mastered
        </p>
        <h2 className={styles.sectionHeadText}>Frameworks and Liberaries</h2>
      </motion.div>
      <motion.p 
      variants={fadeIn('','',0.1,1)}
      className='mb-7 mt-4 dark:text-secondary text-[#6d6d6d] text-[17px] max-w-3xl leading-[30px]'
      >
       Apart from codeing I am also an avid admirer of physics. i love how sophisticatedly constructed numbers can  combine to define the sequence and orbits of stars and planets or how it can define the complex nature of each and every particles coliding with us with a speed 3 fold of bullets, but still we some how survive! it is amazing how god constructed such a perfect universe with such precision, I mean the more you know right. Anyways I wanted to present the skills I have aquired through out my journey in more of 'PHYSICS' oriented fashion and I hope you enjoy the experience as I did while building it!
      </motion.p>
      <div className='cursor-grab'>

    <Scene theme={theme}/>
      </div>

    <p className={`${styles.sectionSubText} my-5`}>
          A More Visible View of The Planets!
        </p>
    <div className='flex flex-row flex-wrap justify-center gap-10'>

      {technologies.map((technology)=>(
        <div className='w-28 h-28 ' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div></motion.section>
  )
}

export default Tech