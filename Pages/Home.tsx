"use client";

import React from "react";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import "./Events"
import Image from "next/image";
import Member from "../components/Member";
import "../styles/HomeBackground.css";
// import Navbar from "../components/Navbar";
import "../styles/Book.css";
import "../styles/Scroll.css";
import "@fontsource/clear-sans";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
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
      <>
        <MobileHeader />
        <div className='font z-50'>
          <section className='pt-[29%]'>
            <div className='slider mt-[-30.5%] '>
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
              <h2 className='text-3xl font-bold justify-center mt-[-10%]'>Who Are We</h2>
              <img
                className='max-w-[100%] max-h-[55%] book-img-blur book-img-style'
                src='/HY.jpg'
              />

              <div className='banner-tex'>
                <p className='text-xl font-semibold text-center mb-10 mt-10'>
                  Hindu YUVA aims to provide a platform to preserve, practice, promote, and protect
                  Hindu Dharma by bringing together Hindu youth on college campuses across North America.
                  Hindu YUVA creates opportunities for college communities (students, staff, and faculty members)
                  to understand and practice Hindu Dharma or the Hindu way of life.
                </p>
                <a
                  target='_blank'
                  className='justify-center mb-12 text-center banner-text'
                  href='/Explore'>
                  <button className=' buy-book-button-before text-white hover:text-black font-bold py-3 sm:py-4 px-9 sm:px-12 rounded-full hover:bg-blue-100 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg text-xl sm:text-2xl '>
                    More About Us
                  </button>
                </a>

              </div>

            </section>
          </div>
          <section id="#youtube" ref={youtubeRef} className={`transition-opacity duration-1000 ${youtubeInView ? 'opacity-100' : 'opacity-0'}`}>
            <section className='drop-shadow-2xl youtube-background mt-[-7%] pb-2 '>
              <div className='center'>
                <iframe width="400" height="315" src="https://www.youtube.com/embed/8sM0C2qs094?si=IpzFKQyyi8oFhxI5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </section>
          </section>

          <Element name='footer'>
            <MobileFooter />
          </Element>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <main >
          <section className='font'>
            <div className='banner-container'>
              <div className='banner-text'>
                <h1 className='mt-[25%]'> Hindu YUVA at </h1>
                <h1>The University of California, Riverside</h1>
                <h2 className='mt-9'>A platform to preserve, practice, promote, and protect Dharma at UCR.</h2>
                <a
                  target='_blank'
                  className=''
                  href='https://highlanderlink.ucr.edu/organization/hinduyuvaucr'>
                  <button className=' mt-[8%] w-60 buy-book-button-before text-white hover:text-black font-bold py-3 sm:py-4 px-9 sm:px-12 rounded-full hover:bg-blue-100 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg text-xl sm:text-2xl '>
                    Join Now
                  </button>
                </a>
              </div>
              <div className='slider gradient  mt-[-42vw] '>
                <figure>
                  <img src="/1.png" alt="image1" />
                  <img src="/2.png" alt="image1" />
                  <img src="/3.png" alt="image1" />
                </figure>

              </div>
            </div>
          </section>

          <section ref={aboutRef} className={`transition-opacity duration-1000 ${aboutInView ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className=' font text-4xl font-bold justify-center mt-11 ml-[40%]'>Who We Are</h2>
            <section
              id='about'
              className=' font min-h-screen flex flex-row items-center justify-center text-white px-4 py-8 mt-[-6%]'>

              <div className='items-center text-center mb-[9%]'>
                <h2 className='text-2xl text-black text-center mr-9 pl-12 pr-12 pb-8'>
                  Hindu YUVA aims to provide a platform to preserve, practice, promote, and protect
                  Hindu Dharma by bringing together Hindu youth on college campuses across North America.
                  Hindu YUVA creates opportunities for college communities (students, staff, and faculty members)
                  to understand and practice Hindu Dharma or the Hindu way of life.
                </h2>
                <a
                  target='_blank'
                  className='z-auto'
                  href='/Explore'>
                  <button className='items-center text-center buy-book-button-before text-white hover:text-black font-bold py-3 sm:py-4 px-9 sm:px-12 rounded-full hover:bg-blue-100 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg text-xl sm:text-2xl '>
                    More About Us
                  </button>
                </a>
              </div>

              <img
                className='mb-[7%] max-w-[55%] max-h-[55%] book-img-blur book-img-style'
                src='/HY.jpg'
              />
            </section>
          </section>
          <section id="#youtube" ref={youtubeRef} className={`transition-opacity duration-1000 ${youtubeInView ? 'opacity-100' : 'opacity-0'}`}>
            <section className='drop-shadow-2xl mt-[-7%] pb-2 '>
              <div className='center'>
                <iframe width="1300" height="715" src="https://www.youtube.com/embed/8sM0C2qs094?si=IpzFKQyyi8oFhxI5"
                  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </section>
          </section>


          <Element name='footer'>
            <Footer />
          </Element>
        </main>
      </>
    );
  }
}