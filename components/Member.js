import React from 'react'

import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
import {BsWhatsapp,BsTwitter,BsFacebook, BsLinkedin, BsGithub} from 'react-icons/bs'
import '../styles/Team.css'


// CSS -> Team.css

const Member = ({picture, name, role}) => {
  return (
    
    <div className='member-card-container' id={name}>
        {picture}
        <h1 className='member-name'>{name}</h1>
        <p className='member-role'>{role}</p>
       
    </div>
    
  )
}

export default Member