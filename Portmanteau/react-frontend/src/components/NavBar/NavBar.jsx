import React, { useState } from 'react';
import './NavBar.scss';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';

const NavBar = () => { 
  const [toggle, setToggle] = useState(false)
  return ( 
    <nav className='app__navbar'>
    {/* Starting Block Element Modifier naming convention here*/}
      <div className='app___navbar-logo'>
        <img src={images.logo} alt="My Logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
      ))}

    </ul>

    <div className='app___navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)}/>
{/* This ^ will open the menu whenever it is clicked (if set to true*/}
          {toggle && (
            // Check framer.com for more information on Framer Motion NPM pacakage, check dependencies for more information on packages used her (obv) ;) 
                  <motion.div>
                  whileInView ={{ x: [300, 0] }}
                  transition={{ duration: 0.85, ease: 'easeOut'}}
                  <HiX onClick={() => setToggle(false)}/>
                  <ul className="app__navbar-links">
                  {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li key={item}>
            <div />
            <a href={`#${item}`} onClick={() => setToggle(false)}></a>
          </li>
                  ))}
                  </ul>
                  </motion.div>
            )
          }
    </div>
    </nav>
  )
  }   
export default NavBar;

