import Search from "@/Components/Search";
import Navbar from "@/Components/Navbar";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import PDFDropdown from "@/Components/PDFDropdown";

import Membershome from "@/Components/Membershome";

const Members = () => {
  const [view, setView] = useState(""); // 'keyword', 'date', or ''
  const { user, loading } = useUser();
  const router = useRouter();

  const handleKeywordClick = () => {
    setView("keyword");
  };

  const handleDateClick = () => {
    setView("date");
  };

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  return (
    <div className="">
      <Navbar />
      <p className="mt-10">Hello, {user.name}!</p>
      <h1 className="text-6xl">PDF Library</h1>
      <p></p>
      <h2>Search by keyword or date</h2>

      <div className="">
        <button
          onClick={handleKeywordClick}
          className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 mx-10"
        >
          Keyword
        </button>
        <button
          onClick={handleDateClick}
          className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Date
        </button>

        {view === "keyword" && <Search />}
        {view === "date" && <PDFDropdown />}
      </div>

      <button className="mt-20 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
        YouTube Recordings
      </button>
      <button className="mt-20 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
        Recipes
      </button>
    </div>
  );
};

export default Members;
