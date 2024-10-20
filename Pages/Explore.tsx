"use client";

import React from "react";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import "./Events"
import Image from "next/image";
import Member from "../components/Member";
import "../styles/HomeBackground.css";
import "../styles/GetInvolved.css";
import "../styles/Explore.css";
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
import { GoOrganization } from "react-icons/go";
import { SiGoogleforms } from "react-icons/si";
import { GiJoin } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";


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
            <section>
                <MobileHeader />


                <MobileFooter />
            </section>
        );
    } else {
        return (
            <section>
                <Header />
                <section>
                    <section className='ml-7'>
                        <p className='standard-animation text-4xl sm:text-2xl lg:text-6xl mt-[13%]'>
                            Philosophy of
                        </p>
                        <p className='standard-animation lg:text-6xl font-bold'>
                            Hindu YUVA
                        </p>
                        <section className='standard-animation text-2xl pt-5 '>
                            <p >
                                Hindu YUVA is a student organization dedicated to uniting
                            </p>
                            <p className='standard-animation' >
                                Hindu youth on college campuses.
                                We provide opportunities
                            </p>
                            <p className='standard-animation'>
                                for students, staff, and
                                faculty members to understand
                            </p>
                            <p className='standard-animation'>
                                and practice Hindu Dharma or the Hindu way of life.
                            </p>
                        </section>

                        <section className='standard-animation flex justify-between'>
                            <div className=' w-auto h-1/4 philosphy-card-container'>
                                <p className='philophy-title'>
                                    Protect

                                </p>
                                <p className='center philophy-info'>

                                    Hindu YUVA raises awareness about Hinduphobia,
                                    advocates for Hindu rights globally, and organizes events
                                    to dispel misconceptions and promote a safer environment for Hindu Americans.
                                </p>
                            </div>
                            <div className='w-fixed h-1/4 philosphy-card-container'>
                                <p className='philophy-title'>
                                    Preserve
                                </p>
                                <p className='center philophy-info'>

                                    Hindu YUVA works to preserve the cultural and spiritual
                                    heritage of Hindu Dharma for future generations. We organize events
                                    that showcase Hindu festivals, arts, and traditions,
                                    while also promoting its philosophical teachings through seminars
                                    and workshops on campus.
                                </p>
                            </div>
                            <div className='w-fixed h-1/4 philosphy-card-container'>
                                <p className='philophy-title'>
                                    Practice
                                </p>
                                <p className='center philophy-info'>
                                    Hindu YUVA offers a space for Hindu students to explore their identity, deepen their understanding
                                    of Hindu Dharma, and build a supportive community. Through regular events, we inspire members to practice Hindu values and develop a strong foundation for life.
                                </p>
                            </div>
                            <div className='w-fixed h-1/4 philosphy-card-container'>
                                <p className='philophy-title'>
                                    Promote
                                </p>
                                <p className='center philophy-info'>
                                    Hindu YUVA shares dharmic values like respect for nature, and
                                    Sewa, with the broader campus while fostering interfaith dialogue. This creates an inclusive environment
                                    for all students.
                                </p>

                            </div>


                        </section>
                    </section>
                    <section className='standard-animation pb-16'>
                        <p className='text-4xl sm:text-2xl lg:text-6xl mt-[4%] ml-4'>
                            Hindu YUVA's Reach to University Campuses
                        </p>
                        <img
                            className=' center rounded-xl max-w-[100%] max-h-[55%] book-img-blur book-img-style'
                            src='/stats.png'
                        />
                        <div className='center map-size '>
                            <img
                                className='center rounded-xl w-11/12 book-img-blur book-img-style'
                                src='/map.png'
                            />
                        </div>
                    </section>

                </section>

                <Footer />
            </section>
        );
    }
}