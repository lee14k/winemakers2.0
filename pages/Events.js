// Homeevents.js
import { useEffect, useState } from 'react';
import Event from "../Components/Event";
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function Homeevents() {
const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
console.log("Events data: ", events);

  return (
    
    <div>
        <Navbar/>
      <h2 className="upcoming">Upcoming Events</h2>
      {events.map((event, index) => {
        return (
          <Event
            key={index}
            month={event.month}
            day={event.day}
            time={event.time}
            header={event.title.rendered}
            description={event.description}
            price={event.price}
          />
        );
      })}
    </div>
  );
}
