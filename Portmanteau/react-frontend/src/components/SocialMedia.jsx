import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'


const SocialMedia = () => {
  return (
    <div className='app__social'>
        {/* This is where I will put any social media apps to link (all I really have is linkedIn) */}
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsInstagram />
      </div>
      {/* <div>
        <BsTwitter />
      </div> */}
    </div>
  )
}

export default SocialMedia
