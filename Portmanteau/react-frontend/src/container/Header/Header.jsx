import React from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './Header.scss'
const Header = () => {
  return (
    <div className="app___header app___flex">
      <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition={{ duration: 0.5 }}
        className="app___header-info">
        <div className="app___header-badge">
          <div className="badge-cmp app___flex">
            <span>👋  </span>
            <div style={{ marginLeft: 20}}>
              <p className="p-text">Hello, I am</p>
                <h1 className='head-text'>Aaron</h1>
            </div>
          </div>
           </div>
   ></motion.div> </div>
  )
}

export default Header



// 1:08:38 