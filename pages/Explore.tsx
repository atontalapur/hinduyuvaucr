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
    const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: philosohpyRef, inView: philosophyInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: chapterRef, inView: chapterInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: orgsRef, inView: orgsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

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
                <section>
                    <section className='regular-text ml-4'>

                        <section>
                            <h1 className='font-bold standard-animation text-4xl sm:text-2xl lg:text-6xl mt-[13%]'>
                                Our Mission & Vission
                            </h1>
                            <h2 className='standard-animation text-2xl pt-5'>
                                Preserving Hindu Culture, Empowering Youth one step at a time.
                            </h2>
                            <div className=''>
                                <p className='font-semibold standard-animation text-3xl mt-16 ml-2'>
                                    Our Mission
                                </p>

                                <div className='standard-animation min-h-screen flex flex-row items-center justify-center mt-[-50%]'>
                                    <p className='text-2xl sm:text-xl lg:text-xl mr-16 '>
                                        To create a platform to protect, preserve, practice, and promote Hindu Dharma. We aim to develop character and leadership skills in our members by emphasizing values such as self-discipline, self-confidence, and a spirit of selfless service to the society.
                                    </p>

                                </div>

                                <h2 className='font-semibold standard-animation text-3xl mt-1 ml-2 mt-[-50%]'>
                                    Our Vision
                                </h2>
                                <div className='standard-animation min-h-screen flex flex-row items-center justify-center '>
                                    <p className='  text-2xl sm:text-2xl lg:text-2xl mr-16 mt-[-20%]'>
                                        Young Hindu Americans carry a great deal of responsibility to share this culture, preserve its meaning, and practice its universal values as the inheritors of this way of life. Hindu YUVA derives its inspiration from this ancient knowledge and understands the mammoth task lying in front of the young Hindu Americans. Hindu YUVA aims to provide a platform to preserve, practice, promote, and protect Hindu Dharma by bringing together Hindu college students and young professionals across the United States.
                                    </p>

                                </div>
                            </div>

                        </section>
                        <section className=''>
                            <p className='standard-animation text-4xl sm:text-2xl lg:text-6xl '>
                                Philosophy of
                            </p>
                            <p className='standard-animation text-4xl font-bold'>
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

                            <section className='standard-animation justify-between'>
                                <div className=' w-auto h-1/4 mobile-philosphy-card-container'>
                                    <p className='mobile-philophy-title'>
                                        Protect


                                    </p>
                                    <p className='center mobile-philophy-info'>

                                        Hindu YUVA raises awareness about Hinduphobia,
                                        advocates for Hindu rights globally, and organizes events
                                        to dispel misconceptions and promote a safer environment for Hindu Americans.
                                    </p>
                                </div>
                                <div className='w-fixed h-1/4 mobile-philosphy-card-container'>
                                    <p className='mobile-philophy-title'>
                                        Preserve
                                    </p>
                                    <p className='center mobile-philophy-info'>

                                        Hindu YUVA works to preserve the cultural and spiritual
                                        heritage of Hindu Dharma for future generations. We organize events
                                        that showcase Hindu festivals, arts, and traditions,
                                        while also promoting its philosophical teachings through seminars
                                        and workshops on campus.
                                    </p>
                                </div>
                                <div className='w-fixed h-1/4 mobile-philosphy-card-container'>
                                    <p className='mobile-philophy-title'>
                                        Practice
                                    </p>
                                    <p className='center mobile-philophy-info'>
                                        Hindu YUVA offers a space for Hindu students to explore their identity, deepen their understanding
                                        of Hindu Dharma, and build a supportive community. Through regular events, we inspire members to practice Hindu values and develop a strong foundation for life.
                                    </p>
                                </div>
                                <div className='w-fixed h-1/4 mobile-philosphy-card-container'>
                                    <p className='mobile-philophy-title'>
                                        Promote
                                    </p>
                                    <p className='center mobile-philophy-info'>
                                        Hindu YUVA shares dharmic values like respect for nature, and
                                        Sewa, with the broader campus while fostering interfaith dialogue. This creates an inclusive environment
                                        for all students.
                                    </p>

                                </div>


                            </section>
                        </section>
                    </section>
                    <section className='regular-text standard-animation pb-16 ml-4'>
                        <p className='text-4xl sm:text-2xl lg:text-6xl mt-[4%] '>
                            North America's branches

                        </p>
                        <p className='font-semibold text-4xl sm:text-2xl lg:text-6xl'>
                            Where Hindu Identity flourishes
                        </p>
                        <p className='text-2xl standard-animation'>
                            Hindu YUVA chapter is a great way to spread awareness about
                            Hindu Dharma on
                        </p>
                        <p className='text-2xl standard-animation'>
                            campus, meet new people, and develop our own
                            leadership and organizational skills.
                        </p>

                        <img
                            className=' center rounded-xl w-11/12 max-w-[100%] max-h-[55%] book-img-blur book-img-style'
                            src='/stats.png'
                        />
                        <div className='center map-size '>
                            <img
                                className='center rounded-xl w-11/12 book-img-blur book-img-style'
                                src='/map.png'
                            />
                        </div>
                    </section>

                    <section className='regular-text standard-animation pb-16 mb-[-10%]'>
                        <p className='text-4xl mt-[4%] ml-4'>
                            Hindu YUVA's Contribution to Students and Campuses
                        </p>

                        {/* <div className='line'></div> */}
                        <p className='font-semibold text-4xl sm:text-2xl lg:text-5xl mt-[4%] ml-4 pb-16 mt-[30%] mb-[-20%]'>
                            Vivekananda House
                        </p>
                        <img
                            className='center rounded-xl w-11/12 book-img-blur book-img-style'
                            src='/VH.png'
                        />
                        <div className='min-h-screen flex flex-row items-center justify-center mt-[-22%]'>
                            <p className='text-2xl text-black text-center pb-8 ml-2 mr-2'>
                                The growing Hindu student population in American universities has highlighted
                                the need for establishing Hindu Cultural Centers on college campuses to ensure a
                                consistent Hindu presence and perspective within academic settings. These centers,
                                modeled after existing cultural houses on U.S. campuses, would serve as central hubs
                                for Hindu cultural activities and events. This initiative, led by the Hindu Society
                                of America, seeks to institutionalize Hindu representation in university life.
                            </p>

                        </div>
                        {/* <div className='line mt-[-18%] '></div> */}

                        <p className='font-semibold text-4xl sm:text-2xl lg:text-5xl ml-4 pb-16  mb-[-20%] mt-[-20%]'>
                            Hindu Medical Society of America
                        </p>
                        <img
                            className='center rounded-xl w-11/12 book-img-blur book-img-style'
                            src='/HMSA.png'
                        />
                        <div className='min-h-screen flex flex-row items-center justify-center'>

                            <p className='text-2xl text-black text-center pb-8 mt-[-72%]'>
                                Hindu Medical Society of America (HMSA) provides a platform to connect medical students, residents and professionals to understand medicine through the lens of Hindu Dharma. By providing a platform for Sewa, Education and Representation, HMSA aims to create a strong network of physicians inspired by the Hindu Way of Life.
                            </p>

                        </div>
                        {/* <div className='line mt-[-20%]'></div> */}
                        <p className='font-semibold text-4xl sm:text-2xl lg:text-5xl ml-4 pb-16 mb-[-20%] mt-[-72%]'>
                            The American Hindu
                        </p>
                        <img
                            className='center rounded-xl w-11/12 book-img-blur book-img-style'
                            src='/TAH.webp'
                        />
                        <div className='min-h-screen flex flex-row items-center justify-center'>
                            <p className='text-2xl text-black text-center pb-8 mt-16'>
                                The American Hindu is a dynamic, youth-driven initiative that began as an Instagram content creator in January 2020.

                                The American Hindu has since evolved into a self-publishing
                                organization specializing in a diverse
                                range of Hindu educational content.
                                Through a blend of traditional and modern mixed-media formats, including print and digital publications, videos, and interactive resources, the organization aims to make Hindu culture, philosophy, and history accessible and engaging for a wide audience. By empowering young creators and fostering a collaborative environment, The American Hindu preserves and promotes cultural heritage and encourages the exploration and understanding of Hindu traditions in a contemporary context.
                            </p>

                        </div>
                    </section>
                </section>



                <MobileFooter />
            </section>
        );
    } else {
        return (
            <section className='font'>
                <Header />
                <section>
                    <section className='regular-text ml-7'>

                        <section ref={missionRef} className={`transition-opacity duration-1000 ${missionInView ? 'opacity-100' : 'opacity-0'}`}>
                            <h1 className='center font-bold standard-animation text-4xl sm:text-2xl lg:text-6xl mt-[13%]'>
                                Our Mission & Vision
                            </h1>
                            <h2 className='center standard-animation text-2xl pt-5'>
                                Preserving Hindu Culture, Empowering Youth one step at a time.
                            </h2>
                            <div className=''>
                                <h2 className=' font-semibold standard-animation lg:text-4xl pt-16 mr-16 '>
                                    Our Mission
                                </h2>
                                <div className='standard-animation min-h-screen flex flex-row items-center justify-center mt-[-20%]'>
                                    <p className='  text-2xl sm:text-2xl lg:text-2xlmr-16 mt-[-10%]'>
                                        To create a platform to protect, preserve, practice, and promote Hindu Dharma. We aim to develop character and leadership skills in our members by emphasizing values such as self-discipline, self-confidence, and a spirit of selfless service to the society.
                                    </p>

                                </div>

                                <h2 className='font-semibold standard-animation lg:text-4xl  mr-16 mt-[-25%]'>
                                    Our Vision
                                </h2>
                                <div className='standard-animation min-h-screen flex flex-row items-center justify-center mt-[-18%]'>
                                    <p className='  text-2xl sm:text-2xl lg:text-2xl mr-16 mt-[-10%]'>
                                        Young Hindu Americans carry a great deal of responsibility to share this culture, preserve its meaning, and practice its universal values as the inheritors of this way of life. Hindu YUVA derives its inspiration from this ancient knowledge and understands the mammoth task lying in front of the young Hindu Americans. Hindu YUVA aims to provide a platform to preserve, practice, promote, and protect Hindu Dharma by bringing together Hindu college students and young professionals across the United States.
                                    </p>

                                </div>
                            </div>

                        </section>
                        <section ref={philosohpyRef} className={`mt-[-20%] transition-opacity duration-1000 ${philosophyInView ? 'opacity-100' : 'opacity-0'}`}>
                            <p className='standard-animation text-4xl sm:text-2xl lg:text-6xl '>
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
                    </section>
                    <section ref={chapterRef} className={`regular-text pb-16 ml-4 transition-opacity duration-1000 ${chapterInView ? 'opacity-100' : 'opacity-0'}`}>

                        <p className='text-4xl sm:text-2xl lg:text-6xl mt-[4%] '>
                            North America's branches

                        </p>
                        <p className='font-semibold text-4xl sm:text-2xl lg:text-6xl'>
                            Where Hindu Identity flourishes
                        </p>
                        <p className='text-2xl standard-animation'>
                            Hindu YUVA chapter is a great way to spread awareness about
                            Hindu Dharma on
                        </p>
                        <p className='text-2xl standard-animation'>
                            campus, meet new people, and develop our own
                            leadership and organizational skills.
                        </p>


                        <div className=' center '>
                            <img
                                className=' center rounded-xl w-1/2 book-img-blur book-img-style'
                                src='/map.png'
                            />
                            <img
                                className=' center rounded-xl max-w-[20%] max-h-[55%] book-img-blur book-img-style'
                                src='/stats.png'
                            />

                        </div>

                    </section>

                    <section ref={orgsRef} className={`regular-text  pb-16 mb-[-10%] transition-opacity duration-1000 ${orgsInView ? 'opacity-100' : 'opacity-0'}`} >
                        <p className='text-4xl sm:text-2xl lg:text-6xl mt-[4%] ml-4'>
                            Hindu YUVA's Contribution to Students and Campuses
                        </p>

                        {/* <div className='line'></div> */}
                        <p className='font-semibold text-4xl sm:text-2xl lg:text-5xl mt-[4%] ml-4 mb-[-17%]'>
                            Vivekananda House
                        </p>
                        <div className='min-h-screen flex flex-row items-center justify-center'>
                            <p className='text-left text-2xl sm:text-2xl lg:text-2xl pr-2 pl-2'>
                                The growing Hindu student population in American universities has highlighted the need for establishing Hindu Cultural Centers on college campuses. These centers would ensure a consistent Hindu presence and perspective within academic settings. Although Hindu student groups are present on many campuses, they often struggle with continuity due to the transient nature of student populations. To address this, the proposed solution is the Vivekananda House—a residential facility designed to serve as a central hub for Hindu cultural activities and events, modeled after existing cultural houses on U.S. campuses. This initiative, led by the Hindu Society of America, seeks to institutionalize Hindu representation in university life.
                            </p>
                            <img
                                className='rounded-lg mb-[7%] mr-7 content-right max-w-[30%] max-h-[55%] book-img-blur book-img-style'
                                src='/VH.png'
                            />
                        </div>
                        {/* <div className='line mt-[-18%] '></div> */}

                        <p className='font-semibold lg:text-5xl mt-[-14%] ml-4 mb-[-10%] '>
                            Hindu Medical Society of America
                        </p>
                        <div className='min-h-screen flex flex-row items-center justify-center'>
                            <img
                                className='rounded-lg mb-[7%] ml-7 content-right max-w-[30%] max-h-[55%] book-img-blur book-img-style'
                                src='/HMSA.png'
                            />
                            <p className='items-center text-left text-2xl sm:text-2xl lg:text-2xl pr-2 pl-16 pb-16'>
                                Hindu Medical Society of America (HMSA) provides a platform to connect medical students, residents and professionals to understand medicine through the lens of Hindu Dharma. By providing a platform for Sewa, Education and Representation, HMSA aims to create a strong network of physicians inspired by the Hindu Way of Life.HMSA provides opportunities for its members to network and find mentors/mentees, participate in healthcare-related sewa activities, educate the community on both healthcare and Hindu culture, conduct and present research related to Hindu Dharma and medicine, and much more. Building a strong connection among present and future Hindu physicians will be valuable for the physicians, their patients, and the field of medicine.
                            </p>

                        </div>
                        {/* <div className='line mt-[-20%]'></div> */}
                        <p className='font-semibold text-4xl sm:text-2xl lg:text-5xl ml-4 mt-[-14%] mb-[-13%] '>
                            The American Hindu
                        </p>
                        <div className='min-h-screen flex flex-row items-center justify-center'>
                            <p className='items-center text-left text-2xl sm:text-2xl lg:text-2xl pr-16 pl-2'>
                                The American Hindu is a dynamic, youth-driven initiative that began as an Instagram content creator in January 2020.

                                The American Hindu has since evolved into a self-publishing organization specializing in a diverse range of Hindu educational content. Through a blend of traditional and modern mixed-media formats, including print and digital publications, videos, and interactive resources, the organization aims to make Hindu culture, philosophy, and history accessible and engaging for a wide audience. By empowering young creators and fostering a collaborative environment, The American Hindu preserves and promotes cultural heritage and encourages the exploration and understanding of Hindu traditions in a contemporary context.
                            </p>
                            <img
                                className='rounded-lg mb-[7%] mr-7 content-right max-w-[30%] max-h-[55%] book-img-blur book-img-style'
                                src='/TAH.webp'
                            />
                        </div>
                    </section>
                </section>

                <Footer />
            </section>
        );
    }
}