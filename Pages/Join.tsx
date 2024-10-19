"use client";

import React from "react";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import "./Events"
import Image from "next/image";
import Member from "../components/Member";
import "../styles/HomeBackground.css";
import "../styles/GetInvolved.css";
// import Navbar from "../components/Navbar";
import "../styles/Book.css";
import "../styles/Scroll.css";
import "../styles/GetInvolved.css";
import "@fontsource/clear-sans";
import { BsFacebook, BsTwitterX, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link, Element } from 'react-scroll';
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import { InstagramEmbed } from 'react-social-media-embed';
import { Homemade_Apple } from "next/font/google";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { FaDiscord, FaYoutube } from "react-icons/fa6";
import { GoOrganization } from "react-icons/go";
import { SiGoogleforms } from "react-icons/si";


export default function Home() {
    const [isMobile, setIsMobile] = useState(false);

    const homeRef = useRef(null);
    const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: youtubeRef, inView: youtubeInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // This matches Tailwind's 'md' breakpoint
        };
        handleResize();
        const handleScroll = () => {
            const elements = document.querySelectorAll('.hidden');
            elements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    element.classList.add('visible');
                }
            });
        };

        handleResize(); // Check initial size
        window.addEventListener("resize", handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (isMobile) {
        return (
            <MobileHeader />


        );
    } else {
        return (
            <section>
                <Header />

                <p className='text-4xl sm:text-2xl lg:text-6xl text-center mt-[13%]'>
                    Get Involved
                </p>
                <section className='join-us-container'>
                    <div className=" join-us-content text-7xl " >
                        <a
                            className='card icon'
                            target='_blank'
                            href='mailto:ucrhinduyuva@gmail.com'>
                            <MdEmail />
                        </a>
                        {/* <a
                            className='icon'
                            target='_blank'
                            href='https://instagram.com/ucrhinduyuva'>
                            <FaInstagram />
                        </a> */}
                        <a
                            className='card icon'
                            target='_blank'
                            href='https://discord.gg/hXfKRxaa4f'>
                            <FaDiscord />
                        </a>
                        <a
                            className='card icon'
                            target='_blank'
                            href='https://discord.gg/hXfKRxaa4f'>
                            <BsWhatsapp />
                        </a>
                        <a
                            className='card icon'
                            target='_blank'
                            href='https://www.youtube.com/@HinduYUVAUSA'>
                            <FaYoutube />
                        </a>
                        <a
                            className='card icon'
                            target='_blank'
                            href='https://highlanderlink.ucr.edu/organization/hinduyuvaucr'>
                            <GoOrganization />
                        </a>
                        <a
                            className='card icon'
                            target='_blank'
                            href='https://docs.google.com/spreadsheets/d/1q0u1YOj2MJQJhNACP7zypsi4wrt5t-r0JTBYst4Swdg/edit?usp=sharing'>
                            <SiGoogleforms />
                        </a>

                    </div>
                    </section>
                    <section className='center'>
                        <div
                            className='mt-16 mb-(-4)'
                            style={{ display: "flex", justifyContent: "center" }}>
                            <InstagramEmbed
                                url='https://www.instagram.com/ucrhinduyuva/'
                                width={800}
                            />
                        </div>
                    </section>
                
                <Footer />
            </section>


        );
    }
}