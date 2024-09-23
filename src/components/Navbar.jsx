import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaMoon, FaRegLightbulb, FaRegMoon } from 'react-icons/fa';
import {MdMenu, MdClose} from 'react-icons/md'
import { styles } from '../style';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import Logo from '../assets/logo.png';
import Logo2 from '../assets/logo2.png';

const Navbar = ({theme, handleClick}) => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  // const [theme, setTheme] = useState(localStorage.theme || 'light');

  // Check and apply the theme when the component mounts
  // useEffect(() => {
  //   if (localStorage.theme === 'dark') {
  //     document.documentElement.classList.add('dark');
  //     setTheme('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     setTheme('light');
  //   }
  // }, []);

  // // Toggle theme on button click
  // function handleClick() {
  //   if (theme === 'dark') {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.theme = 'light';
  //     setTheme('light');
  //   } else {
  //     document.documentElement.classList.add('dark');
  //     localStorage.theme = 'dark';
  //     setTheme('dark');
  //   }
  // }
  
  return (
    <nav className={`${styles.paddingX}  transition-all w-full flex items-center py-5 fixed top-0 z-20 backdrop-blur-sm bg-[#ffffffb2] dark:bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          {(theme==='dark'?<img src={Logo} alt='logo' className='w-12 h-12 border-r-[3px] border-[#fff] object-contain ' />:
          <img src={Logo2} alt='logo' className='w-12 h-[48px] object-contain border-r-[3px] border-[#000] duration-500 ' />)}
          <p className={`dark:text-white text-[18px]  ${theme==='dark'? "border-white": "border-black"} font-bold cursor-pointer `}>
            Biruk <span className='sm:flex hidden'>Temesgen</span>
          </p>
        </Link>
        <ul className='list-none sm:flex hidden flex-row gap-10 '>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-orange-500 dark:text-white' : 'text-gray-700 dark:text-secondary'
              } hover:text-orange-600 dark:hover:text-white text-[18px] font-medium cursor-pointer duration-300`}
              onClick={() => setActive(link.title)}>
              <a href={`${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
       
        <div
          className='flex-initial font-bold underline decoration-sky-500 dark:text-white text-red-800 cursor-pointer flex items-center'
          onClick={handleClick}>
          {/* Conditionally render the icons based on the current theme */}
          {theme === 'light' ? (
            <button className='border-2 rounded-full border-blue-500 p-2 '>
              <FaMoon
              className='text-blue-500 ' />

            </button>
          ) : (
            <button className='border-2 rounded-full border-blue-500 p-2'>
              <FaLightbulb className='text-blue-400' />

            </button>
          )}
        </div>
        <div className='sm:hidden  items-center'>
          <button className=' cursor-pointer'
          onClick={()=> setToggle(!toggle)}>
            {
              toggle?<MdClose className='w-6 h-6'/>:<MdMenu className='w-6 h-6'/>
            }
          
          </button>
          <div className={`${!toggle ? 'hidden':'flex'} p-6 transition-all dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-600 bg-gradient-to-r from-gray-300 to-gray-500 absolute top-20 right-0 mx-4 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'dark:text-white text-black' : 'dark:text-secondary text-gray-700'
                  } hover:text-black dark:hover:text-white text-[14px] font-poppins font-medium cursor-pointer`}
                  onClick={() =>{
                    setToggle(!toggle)
                    setActive(link.title)}}>
                  <a href={`${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
