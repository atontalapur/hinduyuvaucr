import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { differenceInCalendarDays } from 'date-fns';
import "../styles/MyCalendar.css"
import Member from "../components/Member.js";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.js";
import MobileHeader from "../components/MobileHeader.tsx";
import MobileFooter from "../components/MobileFooter.js";
import "../app/globals.css";

class Event {
  private title: string;
  public date: Date;

  private description: string;

  constructor(_title: string, _date: string, _description: string) {

    this.title = _title;
    this.date = new Date(_date);
    this.description = _description;
  }

  getViewable() {
    var titleCutoff = this.title.slice(0, 15) + "...";
    return `${this.date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })} ${titleCutoff}`;
  }
}

// Add events here
const myEvents = [

  new Event("Learn Sanskrit", "October 18, 2024 18:00", "Description"),
  new Event("Hindu Heritage Month - Being an American Hindu", "October 15, 2024 16:30", "Description"),
  new Event("Diwali Diya Decoration", "October 23, 2024 16:00", "Description")
];

// TODO Process clicks on calendar tiles and show descriptions

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function isSameDay(a: Date, b: Date) {
  return differenceInCalendarDays(a, b) === 0;
}

function tileContent({ date, view }: { date: any, view: any }) {
  if (view === 'month') {
    const eventsForDate = myEvents.filter(myEvent => isSameDay(myEvent.date, date));

    eventsForDate.sort((a, b) => {
      return a.date.getTime() - b.date.getTime();
    });

    if (eventsForDate.length > 0) {
      return (
        <div className='MyCalendarEvent_Container'>
          {eventsForDate.map((myEvent, index) => (
            <div className="MyCalendarEvent" key={index}>{myEvent.getViewable()}</div>
          ))}
        </div>
      );
    }
    else {
      return null;
    }
  }

  return null;
}

export default function EventsCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  const [isMobile, setIsMobile] = useState(false);

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
      <div className='font'>
        <MobileHeader />
        <h1 className='font-bold standard-animation text-4xl sm:text-2xl lg:text-6xl mt-[13%] ml-4'>
          Events
        </h1>
        <p className='standard-animation text-3xl mt-1 ml-4'>
          Discover the Events in Hindu YUVA
        </p>
        <div className="MyCalendar">
          <div className="MyCalendar_container">
            <main className="MyCalendar_container_content">
              <Calendar onChange={onChange} value={value} tileClassName={"MyCalendar_tile"} tileContent={tileContent} />
            </main>
          </div>
        </div>
        <div>
          <MobileFooter />
        </div>
      </div>

    );
  } else {
    return (
      <div className='font'>
        <Header />
        <section>
          <p className='center standard-animation font-bold lg:text-6xl mt-[13%] ml-4'>
            Events
          </p>
          <p className='center standard-animation text-3xl mt-1 ml-4'>
            Discover the Events in Hindu YUVA
          </p>
        </section>
        <div className="standard-animation MyCalendar">
          <div className="MyCalendar_container">
            <main className="MyCalendar_container_content">
              <Calendar onChange={onChange} value={value} tileClassName={"MyCalendar_tile"} tileContent={tileContent} />
            </main>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}