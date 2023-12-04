import { useEffect, useState } from 'react';
import Event from "../Components/Event";

export default function Homeevents() {
  const [events, setEvents] = useState([]);

  // Function to convert date string to Date object
  const convertToDate = (dateString) => {
    return new Date(dateString);
  }

  useEffect(() => {
    // Get today's date at midnight for comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    fetch('/api/events')
      .then(response => response.json())
      .then(data => {
        // Filter out past events and sort by date
        const upcomingEvents = data
          .filter(event => convertToDate(event.date) >= today)
          .sort((a, b) => convertToDate(a.date) - convertToDate(b.date));

        // Slice the array to get only the first 3 events
        setEvents(upcomingEvents.slice(0, 3));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  console.log("Events data: ", events);

  return (
    <div className="homewrapper">
      <h2 className="upcoming flex justify-center items-center text-6xl">Upcoming Events</h2>
      {events.map((event, index) => {
        return (
          <Event
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
  );
}
