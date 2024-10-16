import React from 'react';
import Link from 'next/link';
import '../styles/Footer.css'; // Import the CSS file
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="mobile-footer-logo">
                    <img src="/HinduYUVA-NBUCR.png" alt="Hindu YUVA Logo" width={200} height={120} className="mb-[13%] rounded-full" />

                </div>


            </div>
            <div className="text-3xl mobile-footer-social-links mt-[-7%]" >
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