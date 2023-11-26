import Search from "@/Components/Search";
import Navbar from "@/Components/Navbar";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import PDFDropdown from "@/Components/PDFDropdown";
import Membershome from "@/Components/Membershome";
import Newsletter from "@/Components/Newsletter";
import PDFUpload from "@/Components/PDFUpload";
import Test from "@/Components/Test";
import axios from "axios";
const Members = () => {
  const [view, setView] = useState("");
  const [allowedEmails, setAllowedEmails] = useState([]);
  const { user, loading } = useUser();
  const router = useRouter();


  const handleKeywordClick = () => {
    setView("keyword");
  };

  const handleDateClick = () => {
    setView("date");
  };

  const handlePDFClick = () => {
    setView("PDF");
  };
  const handleNewsClick = () => {
    setView("newsletter");
  };


  useEffect(() => {
    const fetchAllowedEmails = async () => {
      try {
        const response = await axios.get('/api/getRoles'); // Adjust the endpoint as necessary
        const emails = response.data.map(user => user.email);
        setAllowedEmails(emails);
        console.log(emails)
      } catch (error) {
        console.error('Error fetching allowed emails:', error);
      }
    };

    fetchAllowedEmails();
  }, []);

    if (loading) return <p>Loading...</p>;
  if (!user) return null;
if (!allowedEmails.includes(user.email)) {
console.log('not allowed')}
  return (
    <div className="mx-10">
      <Navbar />
      <p className="mt-10">Hello, {user.name}!</p>

      <h1>Welcome to the Members Area</h1>
      <p></p>
      <h1 className="text-2xl">PDF Library</h1>
      <p></p>
      <h2>Search by keyword or date</h2>

      <div className="">
        <ul className="flex gap-20">
          <li>
            <button
              onClick={handleKeywordClick}
              className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 "
            >
              Keyword
            </button>
          </li>

          <li>
            <button
              onClick={handleDateClick}
              className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Date
            </button>
          </li>

          {allowedEmails.includes(user.email) && (
          <li>
            <button
              onClick={handleNewsClick}
              className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 "
            >
              Upload Vintners Press
            </button>
          </li>
          )}
          {allowedEmails.includes(user.email) && (
    <li>
      <button
        onClick={handlePDFClick}
        className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        Upload another PDF
      </button>
    </li>
  )}
</ul>
        {view === "keyword" && <Search />}
        {view === "date" && <PDFDropdown />}
   {view === "PDF" && allowedEmails.includes(user.email) && <PDFUpload />}

      </div>

      <div className="flex flex-col">
        <button className="mt-20 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
          YouTube Recordings
        </button>
        <button className="mt-20 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
          Recipes
        </button>
      </div>

    </div>
  );
};

export default Members;
