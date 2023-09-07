import { useEffect, useState } from 'react';
import Event from "../Components/Event";

export default function Homeevents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then(response => response.json())
      .then(data => {
        // Here's the change: we slice the array to get only the first 3 events.
        setEvents(data.slice(0, 3))
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  console.log("Events data: ", events);

  return (
    <div className="homewrapper">
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
