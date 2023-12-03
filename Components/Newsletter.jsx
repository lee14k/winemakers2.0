import { useState, useEffect } from "react";
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Table from "./Table";

const firebaseConfig = {
  apiKey: "AIzaSyAbVNAxcjwqyFybOLMfEcgWjLXlGqSCt-k",
  authDomain: "vintnerspress.firebaseapp.com",
  projectId: "vintnerspress",
  storageBucket: "vintnerspress.appspot.com",
  messagingSenderId: "342226771832",
  appId: "1:342226771832:web:37a400886bf7f6be87f28d",
  measurementId: "G-RFCVYWND7T",
};

// Initialize Firebase (do this only once in your app)
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const db = getFirestore(app);
const Newsletter = () => {
  // No need to fetch dates here if we're just rendering the table

  return (
    <>
      {" "}
      {/* Pass the db instance and the collection name to the Table component */}
      <Table db={db} collectionName="newsletter" />
    </>
  );
};

export default Newsletter;
