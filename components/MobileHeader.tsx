import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdMenu, MdClose } from 'react-icons/md';
import '../styles/MobileHeader.css'; // Import the CSS file
import "../Pages/Team.tsx";
import "../Pages/Home.tsx";
import "../Pages/Events"

const navItems = [
  { name: 'Home', href: '/Home' },
  { name: 'About', href: '/About' },
  { name: 'Events', href: '/Events' },
  { name: 'HY In Action', href: '/Work' },
  { name: 'Our Team', href: '/Team' },
  { name: 'Get Involved', href: '/Join' },
  { name: 'Shop', href: 'https://highlanderlink.ucr.edu/organization/hinduyuvaucr' },
];

export default function MobileHeader() {
  const [menu, setMenu] = useState(false); // State for menu open/close
  const [activeSection, setActiveSection] = useState(''); // State for active section

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const currentSection = sections.find(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 0 && rect.bottom >= 0;
        }
        return false;
      });
      setActiveSection(currentSection ? currentSection.id : '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className='mobile-header ml-7 '>
      <a href="/Home">
        <img
          src='/HinduYUVA-NBUCR.png'
          alt='The American Hindu Logo'
          className='w-90 h-90 object-cover rounded-full overflow-hidden max-w-[140px] max-h-[140px] '
        />
      </a>
      <div className='menu-icon-box' onClick={toggleMenu}>
        {menu ? (
          <MdClose className='menu-icon' size={40} />
        ) : (
          <MdMenu className='menu-icon' size={40} />
        )}
      </div>

      <div className={`menu-container ${menu ? 'open' : ''}`}>
        <ul className='menu-list'>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className={`menu-btn${activeSection === item.href.slice(1) ? ' active' : ''}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}