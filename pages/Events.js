import { useEffect, useState } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Eventsgrid from '@/Components/Eventsgrid';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then(response => response.json())
      .then(data => {
        console.log('Original data:', data); // Log original data

        const currentDate = new Date();
        const normalizedEvents = data.map(event => {
          let eventDateStr = event.acf && event.acf.date ? event.acf.date : event.date;

          // Check if the date is in YYYYMMDD format and convert it
          if (/^\d{8}$/.test(eventDateStr)) {
            eventDateStr = `${eventDateStr.substring(0, 4)}-${eventDateStr.substring(4, 6)}-${eventDateStr.substring(6, 8)}`;
          }

          let eventDate = new Date(eventDateStr);

          // Check if the date is invalid and log it
          if (isNaN(eventDate)) {
            console.error('Invalid date:', eventDateStr);
            return null;
          }

          return { ...event, normalizedDate: eventDate };
        }).filter(event => event !== null); // Remove events with invalid dates

        console.log('Normalized events:', normalizedEvents); // Log normalized events

        // Sort events by date
        normalizedEvents.sort((a, b) => a.normalizedDate - b.normalizedDate);

        // Filter out past events and reverse the order
        const upcomingEvents = normalizedEvents
          .filter(event => event.normalizedDate >= currentDate)
         

        console.log('Upcoming events:', upcomingEvents); // Log upcoming events

        setEvents(upcomingEvents);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h2 className="text-6xl flex justify-center">Events</h2>
      <p>Click each card to flip and learn more</p>
      <Eventsgrid events={events} />
      <Footer />
    </div>
  );
}
