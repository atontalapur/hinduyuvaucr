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
import { BsFacebook, BsSubscript, BsTwitterX, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdEmail, MdTipsAndUpdates, MdUpdate } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link, Element } from 'react-scroll';
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import { InstagramEmbed } from 'react-social-media-embed';
import { Homemade_Apple } from "next/font/google";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { FaDiscord, FaYoutube } from "react-icons/fa6";
import { GoBroadcast, GoOrganization } from "react-icons/go";
import { SiGoogleforms, SiMailchimp } from "react-icons/si";
import { GiJoin } from "react-icons/gi";
import { BiBroadcast } from "react-icons/bi";


export default function Home() {
    const [isMobile, setIsMobile] = useState(false);

    const homeRef = useRef(null);
    const { ref: igRef, inView: igInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    
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
            <section className='font'>
                <MobileHeader />

                <p className='standard-animation font-bold lg:text-6xl mt-[13%] ml-4'>
                    Get Involved
                </p>
                <p className='standard-animation text-3xl mt-1 ml-4'>
                    Join us to spread awareness about Hindu Dharma on campus,   meet new people,
                </p>
                <p className='standard-animation text-3xl mt-1 ml-4'>
                    and develop our own leadership and organizational skills.
                </p>

                <section className='standard-animation join-us-container'>
                    <div className=" mobile-join-us-content text-4xl " >
                        <a
                            className='icon'
                            target='_blank'
                            href='mailto:ucrhinduyuva@gmail.com'>
                            <MdEmail />

                        </a>
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
                            <MdUpdate />

                        </a>


                    </div>

                </section>
                <section ref={igRef} className={`center regular-text pb-16 ml-4 transition-opacity duration-1000 ${igInView ? 'opacity-100' : 'opacity-0'}`} >
                    <div
                        className='mt-16 mb-(-4)'
                        style={{ display: "flex", justifyContent: "center" }}>
                        <InstagramEmbed
                            url='https://www.instagram.com/ucrhinduyuva/'
                            width={800}
                        />
                    </div>
                </section>

                <MobileFooter />
            </section>




        );
    } else {
        return (
            <section className='font'>
                <Header />

                <p className='center standard-animation font-bold lg:text-6xl mt-[13%] ml-4'>
                    Get Involved
                </p>
                <p className='center standard-animation text-3xl mt-1 ml-4'>
                    Join us to spread awareness about Hindu Dharma on campus, meet
                </p>
                <p className='center standard-animation text-3xl mt-1 ml-4'>
                    new people, and develop our own leadership and organizational skills.
                </p>

                <section className=' standard-animation join-us-container'>
                    <div className=" join-us-content text-7xl " >
                        <a
                            className='icon'
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
                            <SiMailchimp />

                        </a>


                    </div>

                </section>
                <section ref={igRef} className={`center regular-text pb-16 ml-4 transition-opacity duration-1000 ${igInView ? 'opacity-100' : 'opacity-0'}`} >
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