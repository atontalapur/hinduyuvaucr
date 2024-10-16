import React from 'react';
import Image from 'next/image';
import Member from "../components/Member.js";
import Header from "../components/Header";
import Footer from "../components/Footer.js";
import MobileHeader from "../components/MobileHeader";
import MobileFooter from "../components/MobileFooter";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import "../styles/Team.css";
import "../app/globals.css";



export default function Team() {
    const [isMobile, setIsMobile] = useState(false);

    const homeRef = useRef(null);
    const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: youtubeRef, inView: youtubeInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 762); // This matches Tailwind's 'md' breakpoint
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
            <>
            <MobileHeader />
              <div className='z-50'>
                <section id="#home" className='pt-[29%]'>
                  <div className='slider gradient  mt-[-42.5%] '>
                    <figure>
                      <img src="/1.png" alt="image1" />
                      <img src="/2.png" alt="image1" />
                      <img src="/3.png" alt="image1" />
                    </figure>
                  </div>
      
                  <div className='banner-text'>
                    <h1 className=''> Hindu YUVA at </h1>
                    <h1>The University of California, Riverside</h1>
                    <h2 className='text-2xl mt-7'>A platform to preserve, practice, promote, and protect Dharma at UCR.</h2>
                    <a
                      target='_blank'
                      className=''
                      href='https://highlanderlink.ucr.edu/organization/hinduyuvaucr'>
                      <button className=' mt-[8%] w-60 buy-book-button-before text-white hover:text-black font-bold py-3 sm:py-4 px-9 sm:px-12 rounded-full hover:bg-blue-100 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg text-xl sm:text-2xl '>
                        Join Now
                      </button>
                    </a>
                  </div>
                </section>
      
                <div className='about'>
                  <section
                    id='about'
                    className='min-h-screen flex flex-col items-center justify-center text-white px-4 py-8'>
                    <div className='w-full lg:w-1/2 flex justify-center mt-[-5%]'>
                      <div className='relative w-40 h-40 xs:w-72 xs:h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] pt-[-70%] mt-[-5%] mb-[-16%] '>
                        {" "}
                        {/* Decreased image size */}
                      </div>
                    </div>
                    <h2 className='text-3xl font-bold justify-center mt-[-10%]'>Who Are We?</h2>
                    <img
                      className='max-w-[100%] max-h-[55%] book-img-blur book-img-style'
                      src='/HinduYUVAPerson.png'
                    />
                    <div className='mx-auto pt-[30%]'>
                      <p className='text-xl font-semibold text-center mb-10'>
                        Hindu YUVA aims to provide a platform to preserve, practice, promote, and protect
                        Hindu Dharma by bringing together Hindu youth on college campuses across North America.
                        Hindu YUVA creates opportunities for college communities (students, staff, and faculty members)
                        to understand and practice Hindu Dharma or the Hindu way of life.
                      </p>
                    </div>
                  </section>
                </div>
                <section id="#youtube" ref={youtubeRef} className={`transition-opacity duration-1000 ${youtubeInView ? 'opacity-100' : 'opacity-0'}`}>
                  <section className='drop-shadow-2xl youtube-background mt-[-7%] pb-2 '>
                    <div className=''>
                      <iframe width="370" height="250" src="https://www.youtube-nocookie.com/embed/SOLQo1HFOTY?si=wTMGNQBZla7NO8xx&amp;start=0"
                        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"></iframe>
                    </div>
                  </section>
                </section>
      
                <div>
                  <MobileFooter />
                </div>
              </div>
            </>
        );
    }
    else {
        return (
            <div>
                <Header />
                <section
                    id='team'
                    className='min-h-screen flex flex-col items-center justify-center text-white'>
                    <p className='text-4xl sm:text-2xl lg:text-6xl text-center mt-[13%]'>
                        Our Team
                    </p>
                    <p className='text-2xl sm:text-2xl lg:text-4xl text-center mt-[5%]'>
                        Excecutive Committee
                    </p>
                    <div className='team-page-container'>

                        <div className='pt-[-16%]'>
                            <Member
                                picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                                name='Srivani Kollu'
                                role='President'

                            />
                        </div>
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Raghav Sharma'
                            role='Vice President'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Advaith Tontalapur'
                            role='Events and Meetings Chair | Dev'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Ram Rao'
                            role='Treasurer | Developer'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Jeevan Rao'
                            role='Social Media and PR Chair'

                        />
                    </div>
                    <p className='text-2xl sm:text-2xl lg:text-4xl text-center mt-8 mb-8'>
                        Events Committee
                    </p>
                    <div className='team-page-container'>
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Rupa V Gowda'
                            role='Events Coordinator'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Diya Patel'
                            role='GBM Coordinator'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Adeti Krishnan'
                            role='GBM Coordinator'

                        />

                    </div>
                    <p className='text-2xl sm:text-2xl lg:text-4xl text-center mt-8 mb-8'>
                        Social Media and Public Relations Committee
                    </p>
                    <div className='team-page-container'>
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Yogi Marella'
                            role='Student Ambassador'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Tarun Vadapalli'
                            role='Graphic Designer | Developer'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Aarya Manoj'
                            role='Social Media Coordinator'

                        />

                    </div>
                </section>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}