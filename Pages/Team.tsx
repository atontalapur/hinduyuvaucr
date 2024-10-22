import React from 'react';
import Image from 'next/image';
import Member from "../components/Member.js";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.js";
import MobileHeader from "../components/MobileHeader.tsx";
import MobileFooter from "../components/MobileFooter.js";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import "../styles/Team.css";
import "../app/globals.css";
import "../styles/Book.css";



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
                <section
                    id='team'
                    className='min-h-screen flex flex-col items-center justify-center '>
                    <p className='font-bold lg:text-6xl mt-[13%] ml-4'>
                        Our Team
                    </p>
                    <p className='text-3xl mt-1 ml-4'>
                        Meet the team that makes Hindu YUVA at UC Riverside
                    </p>
                    <p className='text-4xl sm:text-2xl lg:text-4xl text-center mt-[5%]'>
                        Excecutive Committee
                    </p>
                    <div className='mobile-member-card-container'>

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
                    <p className='text-4xl sm:text-2xl lg:text-4xl text-center mt-8 mb-8'>
                        Events Committee
                    </p>
                    <div className='mobile-member-card-container'>
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
                    <p className='text-4xl sm:text-2xl lg:text-4xl text-center mt-8 mb-8'>
                        Social Media and Public Relations Committee
                    </p>
                    <div className='mobile-member-card-container'>
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
                <MobileFooter />
            </>
        );
    }
    else {
        return (
            <div>
                <Header />
                <section
                    id='team'
                    className='min-h-screen flex flex-col justify-center'>
                    <h1 className='font-bold standard-animation text-4xl sm:text-2xl lg:text-6xl mt-[13%] ml-4'>
                        Our Team
                    </h1>
                    <p className='standard-animation text-3xl mt-1 ml-4'>
                        Meet the team that makes Hindu YUVA at UC Riverside
                    </p>
                    <p className='standard-animation text-2xl sm:text-2xl lg:text-4xl text-center mt-[5%]'>
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
                            name='Ram Rao'
                            role='Treasurer | Developer'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Advaith T'
                            role='Events and GBM Director | Dev'

                        />
                        <Member
                            picture={<img src={"/HinduYUVA-NBUCR.png"} />}
                            name='Jeevan Rao'
                            role='Social Media and PR Chair'

                        />
                    </div>
                    <p className='standard-animation text-2xl sm:text-2xl lg:text-4xl text-center mt-8 mb-8'>
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
                    <p className='standard-animation text-2xl sm:text-2xl lg:text-4xl text-center mt-8 mb-8'>
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