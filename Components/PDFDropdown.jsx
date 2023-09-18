import { useState, useEffect } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbVNAxcjwqyFybOLMfEcgWjLXlGqSCt-k",
  authDomain: "vintnerspress.firebaseapp.com",
  projectId: "vintnerspress",
  storageBucket: "vintnerspress.appspot.com",
  messagingSenderId: "342226771832",
  appId: "1:342226771832:web:37a400886bf7f6be87f28d",
  measurementId: "G-RFCVYWND7T"
};

// Initialize Firebase (do this only once in your app)
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

const db = getFirestore(app);

const PDFDropdown = () => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    async function fetchDates() {
      let datesArray = [];
      const q = query(collection(db, 'pdfs'));
      const snapshot = await getDocs(q);
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
    const q = query(collection(db, 'pdfs'), where('date', '==', e.target.value));
    const snapshot = await getDocs(q);
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
