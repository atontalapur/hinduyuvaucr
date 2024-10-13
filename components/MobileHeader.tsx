import React, { useEffect, useState } from "react";

import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import "../styles/Header.css";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";
import Link from "next/link";

function MobileHeader() {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const menuLeave = () => {
    const coolMenu = document.getElementById("cool-menu");
    if (coolMenu !== null) {
      coolMenu.classList.add("menu-leave");
      coolMenu.classList.remove("menu-enter");
    }

    setTimeout(() => {
      setMenu(false);
    }, 400);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "join"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();

          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveSection(pathname.slice(1) || "home");
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#join" },
    {name: "Instagram", href: '#instagram-feed'}
  ];

  return (
    <>
      <div className='pl-2 d-header flex-col items-center '>
        <div>
          <img
            src='HinduYUVA-NBUCR.png'
            alt='The American Hindu Logo'
            className='mt-1 ml-1 w-60 h-60 object-cover rounded-full overflow-hidden max-w-[60px] max-h-[60px] bg-red-100'
          />
          <MdMenu
            className='open-menu position-absolute top-0 mt-2'
            size={70}
            onClick={() => {
              setMenu(true);
            }}
          />

          {menu && (
            <div className='menu-container menu-enter' id='cool-menu'>
              <MdClose className='close-menu' onClick={menuLeave} />
              {/* <p className='menu-btn'>Home</p> */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`menu-btn pb-10${
                    activeSection === item.href.slice(1)
                      ? "menu-btn pb-10 pt-5"
                      : ""
                  }`}>
                  <span className='relative inline-block menu-btn'>
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          )}
          {/* <p className='mb-4 ml-6 justify-center font-semibold	mobile-header-the-american'>The American</p>
          <p className =' ml-10 justify-center font-bold		mobile-header-hindu'>Hindu</p> */}
        </div>

        {/* <div className="header-socials">
    <a target="_blank" href="https://google.com"><BsFacebook/></a>
    <a target="_blank" href="https://google.com"><BsInstagram/></a>
    <a target="_blank" href="https://google.com"><BsTwitterX/></a>
    <a target="_blank" href="https://google.com"><BsYoutube/></a>
    </div> */}
      </div>
    </>
  );
}

export default MobileHeader;