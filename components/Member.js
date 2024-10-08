import React from 'react'

import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
import {BsWhatsapp,BsTwitter,BsFacebook, BsLinkedin, BsGithub} from 'react-icons/bs'
import '../styles/Team.css'


// CSS -> Team.css

const Member = ({picture, name, role, major, ig, li, git, id,fb}) => {
  return (
    
    <div className='member-card-container' id={id}>
        {picture}
        <h1 className='member-name'>{name}</h1>
        <p className='member-role'>{role}</p>
        <p className='member-major'>{major}</p>
        <div className='member-socials'>

            {ig != "false" && (
                <a target="_blank" href={ig}><FaInstagram/></a>
            )}
            
            {li != "false" && (
                <a target="_blank" href={li}><BsLinkedin/></a>
            )}
            {git != "false" && (
                <a target="_blank" href={git}><BsGithub/></a>
            )}
            {fb != "false" && (
                <a target="_blank" href={fb}><BsFacebook/></a>
            )}
        </div>
    </div>
    
  )
}

export default Member