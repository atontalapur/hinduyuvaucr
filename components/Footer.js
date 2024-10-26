import React from 'react';
import Link from 'next/link';
import '../styles/Footer.css'; // Import the CSS file
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-logo">
                    <img src="/HinduYUVA-NBUCR.png" alt="Hindu YUVA Logo" width={200} height={120} className="mb-[-20%] rounded-full" />

                </div>


            </div>
            <div className='footer-links-container'>
                <div className=" ceter text-black text-3xl footer-links mt-[-28%] mr-[-15%]">

                    <Link href="/Events" className="footer-link">Events</Link>
                    <Link href="/Explore" className="footer-link">Hindu YUVA In Action</Link>
                    <Link href="/Team" className="footer-link">Our Team</Link>
                    <Link href="/Join" className="footer-link">Get Involved</Link>
                </div>
            </div>
            <div className="center text-3xl footer-social-links mt-[-7%]" >
                <a
                    target='_blank'
                    href='mailto:ucrhinduyuva@gmail.com'>
                    <MdEmail />
                </a>
                <a
                    target='_blank'
                    href='https://instagram.com/ucrhinduyuva'>
                    <FaInstagram />
                </a>
            </div>
            <div className="footer-bottom mt-8 ">
                <p>© 2024 Hindu YUVA at The University of California, Riverside. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;