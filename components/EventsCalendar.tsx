import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { differenceInCalendarDays } from 'date-fns';
import "../styles/MyCalendar.css"

class Event {
    public date: Date;
    private title: string;
    private description: string;

    constructor(_date: string, _title: string, _description: string) {
        this.date = new Date(_date);
        this.title = _title;
        this.description = _description; 
    }

    getViewable() {
        var titleCutoff = this.title.slice(0, 15) + "...";
        return `${this.date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })} ${titleCutoff}`;
    }
}

// Add events here
const myEvents = [
    new Event("October 18, 2024 18:00", "Learn Sanskrit", "Description"),
    new Event("October 15, 2024 16:30", "Hindu Heritage Month - Being an American Hindu", "Description"),
    new Event("October 23, 2024 16:00", "Diwali Diya Decoration", "Description")
];

// TODO Process clicks on calendar tiles and show descriptions

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function isSameDay(a: Date, b: Date) {
  return differenceInCalendarDays(a, b) === 0;
}

function tileContent({ date, view }: {date: any, view: any}) {
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

    return (
        <div className="MyCalendar">
            <div className="MyCalendar_container">
                <main className="MyCalendar_container_content">
                    <Calendar onChange={onChange} value={value} tileClassName={"MyCalendar_tile"} tileContent={tileContent}/>
                </main>
            </div>
        </div>
    )
}