import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase (do this only once in your app)
if (!firebase.apps.length) {
  const firebaseConfig = {
    // your firebase config
  };
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const PDFDropdown = () => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    async function fetchDates() {
      let datesArray = [];
      const snapshot = await db.collection('pdfs').get();
      snapshot.forEach(doc => {
        const date = doc.data().date;
        if (!datesArray.includes(date)) {
          datesArray.push(date);
        }
      });
      setDates(datesArray);
    }
    fetchDates();
  }, []);

  const handleDateChange = async (e) => {
    setSelectedDate(e.target.value);
    const snapshot = await db.collection('pdfs').where('date', '==', e.target.value).get();
    if (!snapshot.empty) {
      const url = snapshot.docs[0].data().url;
      setPdfUrl(url);
    }
  };

  return (
    <div>
      <select value={selectedDate} onChange={handleDateChange}>
        <option value="" disabled>Select a date</option>
        {dates.map(date => (
          <option key={date} value={date}>{date}</option>
        ))}
      </select>

      {pdfUrl && (
        <div>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">Open PDF</a>
        </div>
      )}
    </div>
  );
};

export default PDFDropdown;
