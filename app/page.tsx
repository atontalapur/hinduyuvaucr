"use client";

import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Member from "../components/Member";
import "../styles/Book.css";
import "@fontsource/clear-sans";

import Button from "react-bootstrap/Button";


export default function Page() {
  // Function to open the Amazon link to buy the book when the "Buy Now" button is clicked
  const buyBook = () => {
    window.open(
      "https://www.amazon.com/Hindu-American-Mosaic-American-Hindu/dp/B0DFXH93R5/ref=sr_1_1?crid=3SA73LG61AA4M&dib=eyJ2IjoiMSJ9.Gfjy2LwA45QqeZE91v_F24dWWVqWxr3x4PlwrK449Ao.ZotFrzLZ9fB1lo90LnksUfkDdI_SDfp5FZw3F2oxWh0&dib_tag=se&keywords=the+hindu+american+mosaic&qid=1725719899&sprefix=the+american+hindu%2Caps%2C116&sr=8-1",
      "_blank"
    );
  };

  return (

    <>
      {/* <div className="min-h-screen bg-gray-100 tah-clear-sans"> */}
      <Header />
      {/* <MobileHeader/> */}

      <main>
        <section
          id='home'
          className='min-h-screen flex flex-col items-center justify-center text-white px-4 py-8 bg-gradient-to-br from-red-600 via-navy-900 to-sky-400'>
          <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 mt-16 lg:mt-24'>
            {" "}
            {/* Added top margin */}
            <div className='w-full lg:w-1/2 flex justify-center'>
              <div className='relative w-56 h-56 xs:w-72 xs:h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]'>
                {" "}
                {/* Decreased image size */}
                <Image

                  src='/swami.jpg'
                  alt='HMSA Logo'

                  fill
                  style={{ objectFit: "contain" }}
                  className='rounded-lg'
                />
              </div>
            </div>
            <div className='w-full lg:w-1/2 text-center lg:text-left'>
              <h2 className='text-xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-6'>
                Welcome to The American Hindu
              </h2>
              <p className='text-base xs:text-lg sm:text-xl mb-8 mx-auto lg:mx-0 max-w-md'>
                The American Hindu is a platform for second-generation American
                Hindus to express their unique perspective, blending American
                upbringing with Hindu values. Independent of established
                organizations, we're a team of young professionals and students
                aiming to fill the gap in representation for U.S.-raised Hindus.
                Through social media and our website, we engage in dialogue,
                educate, and explore Hindu culture's contributions to the world.
                We invite you to join our conversations and be part of The
                American Hindu.
              </p>
            </div>
          </div>
          <div className='mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
            {" "}
            {/* Increased top margin */}
            <a
              href='https://forms.gle/W6zBeMVQzswTN1CK8'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block w-full sm:w-auto'>
              <button className='w-full bg-gray-200 text-gray-800 hover:text-black font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full hover:bg-gray-100 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg text-xl sm:text-2xl'>
                Get Involved
              </button>
            </a>
            <a
              href='https://www.instagram.com/theamericanhindu/'
              target='_blank'
              rel='noopener noreferrer'
              className='w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 sm:py-4 px-6 rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg flex items-center justify-center text-xl sm:text-2xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mr-2 sm:w-9 sm:h-9'>
                <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
                <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
              </svg>
              @theamericanhindu
            </a>
          </div>
        </section>

        <section
          id='about'
          className='min-h-screen flex flex-col items-center justify-center text-white px-4 py-8 bg-gradient-to-br from-red-600 via-navy-900 to-sky-400'>
          <div className='container mx-auto px-4 max-w-7xl'>
            <p className='text-lg sm:text-xl lg:text-2xl text-center mb-8'>
              The American Hindu is a dynamic, youth-driven initiative that
              began as an Instagram content creator in January.
            </p>
            <p className='text-md sm:text-lg lg:text-xl text-center mb-8'>
              Seeing a lack of informative content on Hindu culture,
              Hindu-American students and young professionals from around the
              country came together to fill the void on social media. Focusing
              on education and advocacy of Hindu topics, the page features
              several post series such as Hinduism 101, Sanskrit
              Non-Translatables, Festival Posts, and Trending Topics.
            </p>
            <p className='text-md sm:text-lg lg:text-xl text-center mb-8'>
              The American Hindu has since evolved into a self-publishing
              organization specializing in a diverse range of Hindu educational
              content. Through a blend of traditional and modern mixed-media
              formats, including print and digital publications, videos, and
              interactive resources, the organization aims to make Hindu
              culture, philosophy, and history accessible and engaging for a
              wide audience. By empowering young creators and fostering a
              collaborative environment, The American Hindu preserves and
              promotes cultural heritage and encourages the exploration and
              understanding of Hindu traditions in a contemporary context.
            </p>
          </div>
        </section>
        <section
          id='team'
          className='min-h-screen flex flex-col items-center justify-center text-white px-4 py-8 bg-gradient-to-br from-red-600 via-navy-900 to-sky-400'>
          <div className='team-page-container'>
            <Member
              picture={<img src={"/mangesh-headshot.jpeg"} />}
              name='Mangesh Ahirrao'
              role='Developer'
              major='Computer Science'
              ig='https://www.instagram.com/mangeshjahirrao/'
              li='https://www.linkedin.com/in/mangeshjahirrao/'
              git='https://github.com/MangeshJAhirrao'
              id=''
              fb='false'
            />
            <Member
              picture={<img src='/sumedh-headshot.png'></img>}
              name='Sumedh Kane'
              role='Developer'
              major='Computer Science'
              ig='https://www.instagram.com/sumedhkane/'
              li='https://www.linkedin.com/in/sumedh-kane/'
              git='https://github.com/sumedhkane03'
              id='sumedh'
              fb='false'
            />
            <Member
              picture={<img src={"/swami.jpg"} />}
              name='New Member'
              role='Hindu'
              major='Hindu'
              ig='https://www.instagram.com/theamericanhindu/'
              li=''
              git=''
              id='mangesh'
              fb='false'
            />
          </div>
        </section>
        <section
          id='join'
          className='min-h-screen flex flex-col items-center justify-center text-white px-4 py-8 bg-gradient-to-br from-red-600 via-navy-900 to-sky-400'>
          <div className='container mx-auto px-4 max-w-7xl'>
            <div className='flex flex-col md:flex-row items-start justify-between'>
              <div className='text-white md:w-2/3 pr-0 md:pr-8'>
                <h2 className='text-4xl xs:text-5xl lg:text-6xl font-bold mb-4 text-left'>
                  Join Our Community
                </h2>
                <p className='text-xl sm:text-2xl mb-6 text-left'>

                  Become a part of the Hindu Medical Society of America and
                  contribute to our mission of integrating Hindu principles with
                  modern medicine.
                </p>
                <a

                  href='https://forms.gle/W6zBeMVQzswTN1CK8'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block'>
                  <button className='bg-white text-hmsa-blue font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300'>
                    Join HMSA
                  </button>
                </a>
              </div>

              <div className='md:w-1/3 mt-8 md:mt-0 flex items-center justify-center md:justify-end'>

                Hello
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* </div> */}
    </>
  );
}
