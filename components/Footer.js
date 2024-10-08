import React from 'react'
import '../styles/Footer.css'
import { FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='foot-branding'>
            <span>Code & Design by </span>
            <img src='/swami.jpg'/>
            <span>The American Hindu</span>
            <a target="_blank" href="https://www.instagram.com/theamericanhindu/">
                <FaInstagram className='foot-social'/>
            </a>
            {/*
            <a target="_blank" href="https://twitter.com/nitesoutent">
                <FaTwitter className='foot-social'/>
            </a>
            <a target="_blank" href="">
                <FaTiktok className='foot-social'/>
            </a>
            */}
        </div>

        <p>theamericanhindu@gmail.com</p>

    </div>
  )
}

export default Footer