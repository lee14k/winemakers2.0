import Search from "@/Components/Search";
import Navbar from "@/Components/Navbar";
import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import PDFDropdown from "@/Components/PDFDropdown";

const Members = () => {
  const [view, setView] = useState(''); // 'keyword', 'date', or ''
  const { user, loading } = useUser();
  const router = useRouter();

  const handleKeywordClick = () => {
    setView('keyword');
  };

  const handleDateClick = () => {
    setView('date');
  };

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  return (
    <div>
      <Navbar />
      <h1>Welcome to Members Only Page</h1>
      <p>Hello, {user.name}!</p>
      <h2>Search by keyword or date</h2>

      <button onClick={handleKeywordClick}>Keyword</button>
      <button onClick={handleDateClick}>Date</button>

      {view === 'keyword' && <Search />}
      {view === 'date' && <PDFDropdown />}
    </div>
  );
};

export default Members;
