"use client";

import React from "react";
import Header from "../components/Header";
import BackgroundCarasoul from "../components/Home";
import MobileHeader from "../components/MobileHeader";
import Image from "next/image";
import Member from "../components/Member";
import "../styles/HomeBackground.css";
// import Navbar from "../components/Navbar";
import "../styles/Book.css";
import "@fontsource/clear-sans";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { InstagramEmbed } from 'react-social-media-embed';
import { Homemade_Apple } from "next/font/google";


export default function Page() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // This matches Tailwind's 'md' breakpoint
    };
    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  if (isMobile) {
    return (
      <div className='pb-9'>
        <MobileHeader />
        {/* <Navbar /> */}
        <div className='mt-[-20%] powerpoint-scroll-container'>
          {/* <div className='min-h-screen bg-gray-100'> */}
          {/* <main> */}

          <section
            id='home'
            className='mb-2 min-h-screen max-w-screen flex flex-col items-center justify-center text-white px-4 py-8 custom-book pb-[20%]'>
            {/* <div className='items-center text-center'> */}
            <img
              className='max-w-[70%] max-h-[70%] book-img-blur book-img-style'
              src='/HinduYUVA@UCRF2024.jpg'
            />
            <h2 className='text-center tah-clear-sans pt-[15%]'>
              Hindu YUVA aims to provide a platform to preserve, practice, promote, and protect
              Hindu Dharma by bringing together Hindu youth on college campuses across North America.
              Hindu YUVA creates opportunities for college communities (students, staff, and faculty members)
              to understand and practice Hindu Dharma or the Hindu way of life.
            </h2>

            {/* <Button className='buy-book-button border-1px-black mt-8' onClick={buyBook}>
              Buy Now
            </Button> */}
            {/* </div> */}
          </section>
          <div className='bg-gradient-to-br from-red-600 via-navy-900 to-sky-400'>
            <section
              id='about'
              className='min-h-screen flex flex-col items-center justify-center text-white px-4 py-8'>
              <div className='w-full lg:w-1/2 flex justify-center mt-[-5%]'>
                <div className='powerpoint-scroll-container-about-us relative w-40 h-40 xs:w-72 xs:h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] pt-[-70%] mt-[-5%] mb-[-16%] '>
                  {" "}
                  {/* Decreased image size */}

                </div>
              </div>
              <div className='mx-auto pt-[30%]'>
                <p className='text-l font-semibold text-center mb-4'>
                  The American Hindu is a dynamic, youth-driven initiative that
                  began as an Instagram content creator in January 2020.
                </p>
                <p className='font-light text-s text-center mb-1 '>
                  The American Hindu has evolved into a self-publishing
                  organization specializing in a diverse range of Hindu
                  educational content. Through a blend of traditional and modern
                  mixed-media formats, including print and digital publications,
                  videos, and interactive resources, the organization aims to
                  make Hindu culture, philosophy, and history accessible and
                  engaging for a wide audience. By empowering young creators and
                  fostering a collaborative environment, The American Hindu
                  preserves and promotes cultural heritage and encourages the
                  exploration and understanding of Hindu traditions in a
                  contemporary context.
                </p>
              </div>
            </section>
          </div>
          <section
            id='join'
            className='mt-[-10%] min-h-screen flex flex-col items-center justify-center text-white px-4 py-8 bg-gradient-to-br from-red-600 via-navy-900 to-sky-400'>
            <div className='container mx-auto px-4 max-w-7xl'>
              <div className='flex flex-col md:flex-row items-start justify-between'>
                <div className='text-white md:w-2/3 pr-0 md:pr-8'>
                  <h2 className='mt-[-20%] text-4xl xs:text-5xl lg:text-6xl font-bold mb-4 text-left'>
                    Join Our Community
                  </h2>
                  <p className='text-xl sm:text-2xl mb-6 text-left'>
                    {/* No mailing list just social media and email */}
                    Follow us on social media to stay updated on our mission to
                    create Hindu representation in mixed media.
                  </p>
                  <div className='flex flex-row gap-[2%]'>
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
                    <div className='text-3xl flex flex-row align-middle gap-[15%] pt-[1.5%] '>
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
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            id="instagram-feed"
            className='min-h-screen flex flex-col items-center justify-center text-white px-4 py-8 bg-gradient-to-br from-red-600 via-navy-900 to-sky-400'>
            <div className='mt-16 mb-(-4)'
              style={{ display: 'flex', justifyContent: 'center' }}>
              <InstagramEmbed url="https://www.instagram.com/p/DA1lznXy6BG/?igsh=MzRlODBiNWFlZA==" width={328} captioned />
            </div>
            <p className='fixed bottom-1 opacity-50 left-2'>
              © 2024 The American Hindu. All rights reserved.
            </p>
          </section>
        </div>
      </div>
    );
  } else {
    return (
      <>
        {/* <div className='min-h-screen bg-gray-100 tah-clear-sans'> */}
        <Header />


        <main>

          <section id="new-home">
            <div className='banner-text'>
              <h1 className='mt-[10%]'> Hindu YUVA at </h1>
              <h1>The University of California, Riverside</h1>
              <h2 className='mt-9'>A platform to preserve, practice, promote, and protect Dharma at UCR.</h2>
              <a
                target='_blank'
                className=''
                href='https://www.amazon.com/Hindu-American-Mosaic-American-Hindu/dp/B0DFXH93R5/ref=sr_1_1?crid=3SA73LG61AA4M&dib=eyJ2IjoiMSJ9.Gfjy2LwA45QqeZE91v_F24dWWVqWxr3x4PlwrK449Ao.ZotFrzLZ9fB1lo90LnksUfkDdI_SDfp5FZw3F2oxWh0&dib_tag=se&keywords=the+hindu+american+mosaic&qid=1725719899&sprefix=the+american+hindu%2Caps%2C116&sr=8-1'>
                <button className=' mt-[8%] w-60 buy-book-button-before text-white hover:text-black font-bold py-3 sm:py-4 px-9 sm:px-12 rounded-full hover:bg-blue-100 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg text-xl sm:text-2xl tah-clear-sans'>
                  Join Now
                </button>
              </a>
            </div>
            <div className='slider gradient  mt-[-40%]'>

              <figure>
                <img src="/1.png" alt="image1" />
                <img src="/2.png" alt="image1" />
                <img src="/3.png" alt="image1" />
              </figure>

            </div>

          </section>
          <h2 className='text-3xl justify-center mt-11 ml-[45%]'>About Us</h2>
          <section
            id='about'
            className='bg-white min-h-screen flex flex-row items-center justify-center text-white px-4 py-8 '>

            <div className='items-center text-center mb-[20%]'>
              <h2 className='text-black text-center tah-clear-sans mr-9 pl-12 pr-12 pb-8'>
                Hindu YUVA aims to provide a platform to preserve, practice, promote, and protect
                Hindu Dharma by bringing together Hindu youth on college campuses across North America.
                Hindu YUVA creates opportunities for college communities (students, staff, and faculty members)
                to understand and practice Hindu Dharma or the Hindu way of life.
              </h2>


            </div>
            <img
              className='mb-[20%] max-w-[55%] max-h-[55%] book-img-blur book-img-style'
              src='/HinduYUVAPerson.png'
            />
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
          {/* <Footer /> */}
          <p className='fixed bottom-1 opacity-50 left-2'>
            © 2024 Hindu YUVA at UCR. All rights reserved.
          </p>
        </main>
      </>

    );
  }
}