"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import "../styles/Header.css";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
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
    <header className="header">
      <div className="header-container">
        <div className="z-50 header-logo">
          <Link href="/Home">
            <Image src="/HinduYUVA-NBUCR.png" alt="Logo" width={200} height={80} />
          </Link>
        </div>
        <nav className="header-links z-50 text-center">
          <Link href="/Events" className={`header-link ${activeSection === "events" ? "active" : ""}`}>
            Events
          </Link>
          <Link href="/Explore" className={`header-link ${activeSection === "explore" ? "active" : ""}`}>
            Hindu YUVA In Action
          </Link>
          <Link href="/Team" className={`header-link ${activeSection === "team" ? "active" : ""}`}>
            Team
          </Link>
          <Link href="/Join" className={`header-link ${activeSection === "join" ? "active" : ""}`}>
            Get Involved
          </Link>
          <Link href="https://store.hinduyuva.org/products/university-of-california-riverside" className="header-link" target="_blank">
            Shop
          </Link>
        </nav>
        <div className="z-50 header-logo-placeholder">
          <Image src="/HinduYUVA-NBUCR.png" alt="Logo" width={200} height={80} />
        </div>
      </div>
    </header>
  );
}
