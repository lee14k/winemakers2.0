import Search from "@/Components/Search";
import Navbar from "@/Components/Navbar";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import PDFDropdown from "@/Components/PDFDropdown";
import Membershome from "@/Components/Membershome";
import Newsletter from "@/Components/Newsletter";
import PDFUpload from "@/Components/PDFUpload";
const Members = () => {
  const [view, setView] = useState("");
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

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

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

          <li>
            <button
              onClick={handleNewsClick}
              className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 "
            >
              Upload Vintners Press
            </button>
          </li>
          <li>
            <button
              onClick={handlePDFClick}
              className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 "
            >
              Upload another PDF
            </button>
          </li>
        </ul>
        {view === "keyword" && <Search />}
        {view === "date" && <PDFDropdown />}
        {view === "newsletter" && <Newsletter />}
        {view === "PDF" && <PDFUpload />}
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
