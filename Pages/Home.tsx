"use client";

import React from "react";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
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
        <div className='z-50'>
          <section id="#home" className='pt-[29%]'>
            <div className='slider gradient  mt-[-30.5%] '>
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
          <section id="#home">
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
            <div className='slider gradient  mt-[-42.5%] '>
              <figure>
                <img src="/1.png" alt="image1" />
                <img src="/2.png" alt="image1" />
                <img src="/3.png" alt="image1" />
              </figure>

            </div>

          </section>

          <section id="#about" ref={aboutRef} className={`transition-opacity duration-1000 ${aboutInView ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className=' text-4xl font-bold justify-center mt-11 ml-[40%]'>Who Are We?</h2>
            <section
              id='about'
              className='  bg-white min-h-screen flex flex-row items-center justify-center text-white px-4 py-8 mt-[-6%]'>

              <div className='items-center text-center mb-[9%]'>
                <h2 className='text-2xl text-black text-center mr-9 pl-12 pr-12 pb-8'>
                  Hindu YUVA aims to provide a platform to preserve, practice, promote, and protect
                  Hindu Dharma by bringing together Hindu youth on college campuses across North America.
                  Hindu YUVA creates opportunities for college communities (students, staff, and faculty members)
                  to understand and practice Hindu Dharma or the Hindu way of life.
                </h2>
              </div>
              <img
                className='mb-[7%] max-w-[55%] max-h-[55%] book-img-blur book-img-style'
                src='/HinduYUVAPerson.png'
              />
            </section>
          </section>
          <section id="#youtube" ref={youtubeRef} className={`transition-opacity duration-1000 ${youtubeInView ? 'opacity-100' : 'opacity-0'}`}>
            <section className='drop-shadow-2xl content-center mt-[-7%] pb-2 '>
              <div className=''>
                <iframe width="1500" height="715" src="https://www.youtube.com/embed/8sM0C2qs094?si=IpzFKQyyi8oFhxI5"
                  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </section>
          </section>
          {/* <section
            id='team'
            className='min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-red-600 via-navy-900 to-sky-400'>
            <p className='text-2xl sm:text-2xl lg:text-4xl text-center mt-16'>
              Excecutive Committee
            </p>
            <div className='team-page-container'>


              <Member
                picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                name='Srivani Kollu'
                role='President'

              />
              <Member
                picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                name='Raghav Sharma'
                role='Vice President'

              />
              <Member
                picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                name='Advaith Tontalapur'
                role='Events and Meetings Director|Developer'

              />
              <Member
                picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                name='Ram Rao'
                role='Treasurer|Developer'

              />
              <Member
                picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                name='Jeevan Rao'
                role='Social Media and PR Director'

              />
            </div>
            <p className='text-2xl sm:text-2xl lg:text-4xl text-center mt-3'>
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
            <p className='text-2xl sm:text-2xl lg:text-4xl text-center mt-3'>
              Social Media and Public Relations Committee
            </p>
            <div className='team-page-container'>
              <Member
                picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                name='Tarun Vadapalli'
                role='Graphic Designer|Developer'

              />
              <Member
                picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                name='Aarya Manoj'
                role='Social Media Coordinator'

              />
              <Member
                picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                name='Yogi Marella'
                role='Student Ambassador'

              />
            </div>

          </section>
          <section
            id='join'
            className='min-h-screen flex flex-col items-center justify-center text-white px-4 py-8 bg-gradient-to-br from-red-600 via-navy-900 to-sky-400'>
            <div className='container mx-auto px-4 max-w-7xl'>
              <div className='flex flex-col md:flex-row items-start justify-center'>
                <div className='text-white md:w-2/3 pr-0 md:pr-8'>
                  <h2 className='text-4xl xs:text-5xl lg:text-6xl font-bold mb-4 text-center'>
                    Stay Connected
                  </h2>
                  <p className='text-xl sm:text-2xl mb-6 text-center'>
                    {/* No mailing list just social media and email */}
          {/* Follow us on social media to stay updated on our mission to
                    create Hindu representation in mixed media.
                  </p>
                  <div className='flex flex-row gap-[2%] flex flex-col justify-center text-center align-center'> */}
          {/* <a
                      href='https://forms.gle/nD3DvXgjB5pTeuwy8'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block'>
                      <button className='bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-gray-200 hover:scale-105 transition duration-300'>
                        Join Now
                      </button>
                    </a> */}
          {/* <div className='border-2 border-color-black pr-[11%] pt-[1%]'> */}
          {/* <div className='text-3xl flex flex-row align-middle gap-[15%] pt-[5%] justify-center'>
                      <a
                        target='_blank'
                        href='https://facebook.com/TheAmericanHinduPage'>
                        <BsFacebook />
                      </a>
                      <a
                        target='_blank'
                        href='https://instagram.com/theamericanhindu'>
                        <FaInstagram />
                      </a>
                      <a target='_blank' href='https://x.com/American_Hindu'>
                        <BsTwitterX />
                      </a>
                      <a
                        target='_blank'
                        href='mailto:theamericanhindu@gmail.com'>
                        <MdEmail />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <Element name='footer'>
            <Footer />
          </Element>
        </main>
      </>

    );
  }
}