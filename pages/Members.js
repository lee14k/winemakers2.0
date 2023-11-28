import Search from "@/Components/Search";
import Navbar from "@/Components/Navbar";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import PDFDropdown from "@/Components/PDFDropdown";
import PDFUpload from "@/Components/PDFUpload";
import signInAnonymouslyIfUploader from "../Components/signInAnonymouslyIfUploader";

const Members = () => {
  const [view, setView] = useState("");
  const { user, loading } = useUser();
  const namespace = "https://myapp.example.com/";
  // Accessing roles from the user object
  const userRoles = user?.[`${namespace}roles`];
  // Check if the user has the 'uploader' role
  const isUploader = userRoles?.includes("Uploader");

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

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  // Call signInAnonymouslyIfUploader directly here
  signInAnonymouslyIfUploader(isUploader)
    .then(() => {
      // Authentication successful, you can perform actions as an anonymous user
    })
    .catch((error) => {
      console.error("Error signing in anonymously:", error);
    });
  return (
    <div className="mx-10">
      <Navbar />
      <p className="mt-10">Hello, {user.name}!</p>
      <h1>Welcome to the Members Area</h1>
      <h1 className="text-2xl">PDF Library</h1>
      <h2>Search by keyword or date</h2>

      <ul className="flex gap-20">
        <li>
          <button onClick={handleKeywordClick} className="...">
            Keyword
          </button>
        </li>

        <li>
          <button onClick={handleDateClick} className="...">
            Date
          </button>
        </li>

        {/* Conditional rendering based on the 'uploader' role */}
        {isUploader && (
          <>
            <li>
              <button onClick={handlePDFClick} className="...">
                Upload another PDF
              </button>
            </li>
          </>
        )}
      </ul>

      {view === "keyword" && <Search />}
      {view === "date" && <PDFDropdown />}
      {view === "PDF" && isUploader && <PDFUpload />}

      {/* ... other UI elements */}
    </div>
  );
};

export default Members;
