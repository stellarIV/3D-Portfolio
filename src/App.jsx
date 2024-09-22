import { BrowserRouter } from "react-router-dom"
import { useState, useEffect } from "react";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, Tech} from './components'
const App = () => {
  const [theme, setTheme] = useState(localStorage.theme || 'light');

  // Check and apply the theme when the component mounts
  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  // Toggle theme on button click
  function handleClick() {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setTheme('dark');
    }
    
  }

  return (
   <BrowserRouter>
   <div className="relative z-0 transition-all duration-500 bg-[#fff9f0] dark:bg-primary dark:text-white text-black ">
    <div className="bg-hero-pattern2 dark:bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar theme={theme} handleClick={handleClick} />
      <Hero theme={theme} setTheme={setTheme} />
    </div>
    <About/>
    <Experience/>
    <Tech theme={theme} setTheme={setTheme}/>
    <div >

    <Works className="w-full"/>
    </div>
    {/* <Feedbacks/> */}
    <div className="relative z-0">
      <Contact/>
      <StarsCanvas/>
    </div>
   </div>
   </BrowserRouter>
  )
}

export default App
