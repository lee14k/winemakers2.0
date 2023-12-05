import { useState, useEffect } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import Table from './Table';
import Search from './Search';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
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
    const [showTable, setShowTable] = useState(false); // State to control the visibility of the table

 useEffect(() => {
    async function fetchDates() {
        let yearsSet = new Set(); 
        const snapshot = await getDocs(collection(db, 'pdfs'));
        snapshot.forEach(doc => {
            const extractedDate = doc.data().extractedDate;
            if (typeof extractedDate === 'string') {
                const dateParts = extractedDate.split(" ");
                if (dateParts.length === 2) {
                    yearsSet.add(dateParts[1]); 
                }
            } else {
                console.log('ExtractedDate is missing or not a string', doc.id);
            }
        });
        setDates([...yearsSet]); 
    }
    fetchDates();
}, []);
   const toggleTableVisibility = () => {
        setShowTable(!showTable); // Toggle the visibility
    };


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
        <div className="flex">
                <button onClick={toggleTableVisibility}>
                {showTable ? 'Hide Table' : 'Show All PDFs'}
            </button>
            <Search/>
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
          </div>
       

            <button onClick={handleQuery}>Fetch PDF</button>
            {showTable && <Table db={db} collectionName="pdfs" />}
            {pdfUrl && (
                <div>
                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer">Open PDF</a>
                </div>
            )}
        </div>
    );
};

export default PDFDropdown;