import {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

//template_hy42mz8
//service_o6w628f
//UJGZVvHSIpnkrZGxA

const Contact = () => {
  const formRef = useRef()
  const [form,setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading,setLoading] = useState (false)
  const handleChange = (e) => {
    const {name, value} = e.target
    
    setForm({ ...form, [name] : value}) 
    
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_o6w628f', 
      'template_hy42mz8',
    {
      from_name: form.name,
      to_name:'Biruk Temesgen',
      from_email: form.email,
      to_email: 'biruktml@gmail.com',
      message: form.message,
    },
  'UJGZVvHSIpnkrZGxA'
  ).then(()=>{
    setLoading(false)
    alert('Thank you! Iwill get back to you as soon as possible.')

    setForm({
      name: '',
      email: '',
      message: '',
    })
  }, (error) => {
    setLoading(false)

    console.log(error)
    alert('Something went wrong.')
  }
  )
  }
  
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left', "tween", 0.2,1)}
      className='flex-[0.75] bg-slate-200 dark:bg-black p-8 rounded-2xl'
      >
        <p className={styles.heroSubText}>GEt in touch</p>
        <h3 className={styles.heroHeadText}>Contact.</h3>
      <form 
      ref={formRef}
      onSubmit={handleSubmit}
      className='mt-12 flex flex-col gap-8'
      >
        <label className='flex flex-col'>
          <span className='dark:text-white font-medium mb-4'>
            Your Name
          </span>
          <input type="text"
          name='name'
          value={form.name}
          onChange={handleChange}
          placeholder='What is your name?'
          className='bg-[#fff] dark:bg-tertiary py-4 px-6 dark:placeholder:text-secondary dark:text-white rounded-lg outline-none border-none font-medium'
           
          />
        </label>
        <label className='flex flex-col'>
          <span className='dark:text-white font-medium mb-4'>
            Your Email
          </span>
          <input type="email"
          name='email'
          value={form.email}
          onChange={handleChange}
          placeholder='What is your Email?'
          className='bg-[#fff] dark:bg-tertiary py-4 px-6 dark:placeholder:text-secondary dark:text-white rounded-lg outline-none border-none font-medium'
           
          />
        </label>
        <label className='flex flex-col'>
          <span className='dark:text-white font-medium mb-4'>
            Your Message
          </span>
          <textarea
          rows='7'
          name='message'
          value={form.massege}
          onChange={handleChange}
          placeholder='What do you want to say?'
          className='bg-[#fff] dark:bg-tertiary py-4 px-6 dark:placeholder:text-secondary dark:text-white rounded-lg outline-none border-none font-medium'
           
          />
        </label>
        <button
        type='submit'
        className='bg-white dark:bg-tertiary py-3 px-8 outline-none w-fit dark:text-white font-bold shadow-md shadow-orange-200 dark:shadow-primary hover:shadow-none hover:scale-95 duration-300 rounded-xl'
        >
       {loading? 'Sending...': 'Send'}   
        </button>

      </form>
      </motion.div>

      <motion.div variants={slideIn('right', "tween", 0.2,1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')