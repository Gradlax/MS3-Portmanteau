import React, { useState } from 'react';
import './NavBar.scss';

import { images } from '../../constants';

const NavBar = () => { 

  return ( 
    <nav>
      <div>
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

    </nav>
  )
  }   
export default NavBar;