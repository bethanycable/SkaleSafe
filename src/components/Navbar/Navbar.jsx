import './Navbar.css';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import React, { useState } from 'react';

import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setToggle(false);
    const id = event.target.getAttribute('href').slice(1);
    const targetEl = document.getElementById(id);
    targetEl.scrollIntoView({ behavior: 'smooth' });
  };

  // ADD ID BELOW
  const links =
    'navbar-links hover:scale-110 hover:text-primary-color hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20 hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]';

  const menuLinks =
    'navbar-links hover:scale-110 hover:text-primary-color hover:border-primary-color duration-[400ms,700ms] transition-[color,box-shadow]';

  return (
    <nav className="fixed w-screen h-20 flex flex-row items-center justify-between bg-honeydew/10 px-4 ml:px-8 lg:px-10 shadow-md shadow-honeydew/10">
      <div className="navbar-logo items-center w-32 h-10 md:w-44 md:h-12 lg:w-48 lg:h-14 shadow shadow-honeydew/20">
        <img
          className="max-h-sm w-4 md:w-8"
          src="/skaleSafelight.png"
          alt="A fish inside a shield"
        />
        <h1 className="text-primary-color text-base md:text-xl lg:text-2xl">
          SkaleSafe
        </h1>
      </div>
      <ul className="navbar-list gap-x-2 lg:gap-x-4">
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
      <ul className="navbar-list gap-x-2 lg:gap-x-4">
        <li className={links}>
          <a
            href="https://github.com/oslabs-beta/SkaleSafe#readme"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li className={links}>
          <a href="https://www.linkedin.com/company/skalesafe" target="_blank">
            LinkedIn
          </a>
        </li>
      </ul>
      <HiMenuAlt4
        className="ml:hidden w-10 h-10 p-2 fill-honeydew bg-honeydew/20 rounded-full cursor-pointer hover:bg-prussian-blue hover:scale-125"
        onClick={() => setToggle(true)}
      />
      {toggle && (
        <motion.div
          className="navbar-menu"
          whileInView={{ x: [200, 0] }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <HiX
            className="navbar-menu-close ml:hidden w-10 h-10 p-2 fill-honeydew bg-honeydew/20 rounded-full hover:shadow-[inset_13rem_0_0_0] hover:shadow-off-white/20"
            onClick={() => setToggle(false)}
          />
          <ul className="app__navbar-list gap-x-2 lg:gap-x-4">
            {[
              ['Home', '#home'],
              ['About', '#about'],
              ['Features', '#features'],
              ['Demo', '#demo'],
              ['The Team', '#team'],
            ].map(([title, url]) => (
              <li key={title}>
                <a href={url} className={menuLinks} onClick={handleClick}>
                  {title}
                </a>
              </li>
            ))}
          </ul>

          <ul className="app__navbar-list navbar-media gap-x-2 lg:gap-x-4">
            <li className={menuLinks}>
              <a
                href="https://github.com/oslabs-beta/SkaleSafe#readme"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li className={menuLinks}>
              <a
                href="https://www.linkedin.com/company/skalesafe"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
