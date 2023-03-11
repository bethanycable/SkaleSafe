import './Navbar.css'

import {HiMenuAlt4, HiX} from 'react-icons/hi'
import React, {useState} from 'react';

import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleClick = (event) => {
    event.preventDefault();
    setToggle(false)
    const id = event.target.getAttribute('href').slice(1);
    const targetEl = document.getElementById(id);
    targetEl.scrollIntoView({behavior: 'smooth'}) ;
  };

  // ADD ID BELOW
  const links =
    'text-honeydew text-2xl font-semi px-2 py-1 hover:scale-110 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]';

  return (
    <nav className='fixed w-screen h-20 flex flex-row items-center justify-between bg-honeydew/10 px-14 xs:px-4 shadow-md shadow-honeydew/10'>
      <div
        className="flex flex-row justify-evenly items-center w-32 h-10 lg:w-60 rounded-full bg-sapphire-blue  shadow shadow-honeydew/20"
      >
        <img
          className="max-h-sm w-4"
          src="/skaleSafelight.png"
          alt="A fish inside a shield"
        />
        <h1 className="text-primary-color text-base lg:text-3xl">
          SkaleSafe
        </h1>
      </div>
      <div className='app__navbar-menu'>
        <HiMenuAlt4
          className='md:hidden w-10 h-10 p-2 fill-honeydew bg-honeydew/20 rounded-full cursor-pointer hover:bg-prussian-blue hover:scale-125' 
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <motion.div
            className='app__navbar-menu-out'
            whileInView={{x:[200,0]}}
            transition={{duration: 0.75, ease: 'easeOut'}}
          >
            <HiX 
              className='navbar-menu-close w-10 h-10 p-2 fill-honeydew bg-honeydew/20 rounded-full hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20' 
              onClick={() => setToggle(false)} 
            />
              <ul className="app__navbar-list">
                {[
                  ['Home', '#home'],
                  ['About', '#about'],
                  ['Features', '#features'],
                  ['Demo', '#demo'],
                  ['The Team', '#team'],
                ].map(([title, url]) => (
                  <li key={title}>
                    <a href={url} className={links} onClick={handleClick}>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="app__navbar-list navbar-media">
                <li className={links}>
                  <a href='https://github.com/oslabs-beta/SkaleSafe#readme' target="_blank">Github</a>
                </li>
                <li className={links}>
                  <a href='https://www.linkedin.com/company/skalesafe' target="_blank">LinkedIn</a>
                </li>
              </ul>
          </motion.div> 
        )}
      </div>
    </nav>
  );
}

export default Navbar;
