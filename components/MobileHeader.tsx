import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdMenu, MdClose } from 'react-icons/md';
import '../styles/MobileHeader.css'; // Import the CSS file

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Our Work', href: '#events' },
  { name: 'Our Team', href: '#team' },
  { name: 'Get Involved', href: '#join' },
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
    <div className='mobile-header'>
      <img
        src='/HinduYUVA-UCR.jpg'
        alt='The American Hindu Logo'
        className='mt-1 ml-1 w-60 h-60 object-cover rounded-full overflow-hidden max-w-[50px] max-h-[50px] bg-red-0'
      />
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