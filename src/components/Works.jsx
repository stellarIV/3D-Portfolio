import React from "react";
import {Tilt} from 'react-tilt'

import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { staggerContainer } from "../utils/motion"


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-slate-200 dark:bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
         <div className='relative w-full h-[230px]'>
           <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
                 <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        
          <h3 className='dark:text-white font-bold text-[24px]'>{name}</h3>
          {/* <p className='mt-2 text-gray-600 leading-7 dark:text-secondary text-[14px]'>{description}</p> */}
        

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
    </motion.div>
      </Tilt>
  );
};

const Works = () => {
  return (
    <>
    <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          This is where I showcase my extensive experience in developing various applications. With a deep passion for technology and a keen eye for detail, I have worked on a diverse range of projects, from sleek, user-friendly websites to robust Java-based applications that streamline business processes. My expertise extends to mobile app development, where I create innovative and intuitive solutions. Each project highlights my commitment to delivering high-quality, scalable, and efficient software tailored to meet client needs and exceed expectations.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div></motion.section>
    </>
  );
};

export default Works
