import React, { useState } from "react";
import { storage } from './firebase'; // Adjust the path as needed
import { ref, uploadBytes } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from './firebase'; // Adjust the path as needed
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.269/pdf.worker.min.mjs';

// Define the parsePDF function
const parsePDF = async (file) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);

  reader.onload = async (event) => {
    const arrayBuffer = event.target.result;
    const pdf = await getDocument({ data: arrayBuffer }).promise;

    let text = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map(item => item.str).join(' ');

      // Once all pages are processed, store the text in Firestore
      if (i === pdf.numPages) {
        await storeParsedDataInFirestore(text, file.name);
      }
    }
  };
};

const storeParsedDataInFirestore = async (parsedText, title) => {
  console.log("Storing in Firestore:", title, parsedText);
  try {
    await addDoc(collection(firestore, 'pdfs'), {
      name: title,
      text: parsedText
    });
    console.log("Stored in Firestore successfully.");
  } catch (error) {
    console.error("Error storing in Firestore:", error);
  }
};

const PDFUpload = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('No file selected');
      return;
    }

    try {
      const storageRef = ref(storage, `pdfs/${file.name}`);
      await uploadBytes(storageRef, file);
      alert('File uploaded successfully!');

      // Parse the PDF and store in Firestore
      await parsePDF(file);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload to PDFs</button>
    </div>
  );
};

export default PDFUpload;
