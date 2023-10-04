import { useEffect, useState } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Eventsgrid from '@/Components/Eventsgrid'; // Import the new component

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <h2 className="text-6xl flex justify-center ">Events</h2>
      <p>Click each card to flip and learn more</p>
      <Eventsgrid events={events} /> {/* Pass the events data to the Eventsgrid component */}
      <Footer />
    </div>
  );
}
