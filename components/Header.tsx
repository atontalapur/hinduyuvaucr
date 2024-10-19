"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { Link } from 'react-router-dom';
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import "../styles/Header.css";
import "../Pages/Team.tsx";
import "../Pages/Home.tsx";
import "../Pages/Events"

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // This matches Tailwind's 'md' breakpoint
    };
    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "events", "team", "join"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 0 && rect.bottom >= 0;
        }
        return false;
      });
      setActiveSection(currentSection || "");

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className=" header">
      <div className="header-container">
        <div className="z-50 header-logo">
          <a href="/Home">
            <Image src="/HinduYUVA-NBUCR.png" alt="Logo" width={200} height={80} />
          </a>
        </div>
        <nav className="center header-links z-50 text-3xl text-center mr-[18%]">
          <Link href="/About" className={`header-link ${activeSection === "about" ? "active" : ""}`}>About Us</Link>
          <Link href="/Events" className={`header-link ${activeSection === "events" ? "active" : ""}`}>Events</Link>
          <Link href="/Work" className={`header-link ${activeSection === "events" ? "active" : ""}`}>HY In Action</Link>
          <Link href="/Team" className={`header-link ${activeSection === "team" ? "active" : ""}`}>Team</Link>
          <Link href="/Join" className={`header-link ${activeSection === "join" ? "active" : ""}`}>Get Involved</Link>
          <Link href="https://store.hinduyuva.org/products/university-of-california-riverside" className={`header-link ${activeSection === "join" ? "active" : ""}`}>Shop</Link>
        </nav>

      </div>
    </header>
  );
}