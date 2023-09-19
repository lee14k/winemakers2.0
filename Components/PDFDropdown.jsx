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
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [pdfUrl, setPdfUrl] = useState('');
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


   useEffect(() => {
        async function fetchDates() {
            let yearsSet = new Set(); // Using a set to avoid duplicates
            const snapshot = await getDocs(collection(db, 'pdfs'));
            snapshot.forEach(doc => {
                const dateParts = doc.data().extractedDate.split(" ");
                if (dateParts.length === 2) {
                    yearsSet.add(dateParts[1]); // Assuming the year is the second part
                }
            });
            setDates([...yearsSet]); // Convert set back to an array
        }
        fetchDates();
    }, []);

    const handleQuery = async () => {
        if (selectedMonth && selectedYear) {
            const dateString = `${selectedMonth} ${selectedYear}`;
            const snapshot = await getDocs(query(collection(db, 'pdfs'), where('extractedDate', '==', dateString)));
            if (!snapshot.empty) {
                const url = snapshot.docs[0].data().url;
                setPdfUrl(url);
            }
        }
    };

    return (
        <div>
            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                <option value="" disabled>Select a month</option>
                {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                ))}
            </select>

            <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                <option value="" disabled>Select a year</option>
                {dates.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>

            <button onClick={handleQuery}>Fetch PDF</button>

            {pdfUrl && (
                <div>
                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer">Open PDF</a>
                </div>
            )}
        </div>
    );
};

export default PDFDropdown;