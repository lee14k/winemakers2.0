// Homeevents.js
import { useEffect, useState } from 'react';
import Event from "../Components/Event";
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Eventspageevent from '@/Components/Eventspagevent';

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
             <div className="events-grid grid grid-cols-3">
      {events.map((event, index) => {
        return (
          <Eventspageevent
            key={index}
          date={event.date}
            time={event.time}
            header={event.title.rendered}
            description={event.description}
            price={event.price}
          />
        );
      })}
      </div>
      <Footer/>
    </div>
  );
}
