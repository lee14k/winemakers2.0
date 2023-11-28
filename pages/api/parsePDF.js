import admin from '../../Components/firebaseAdmin'; // Adjust the path as needed
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { storage, firestore } from '../../Components/firebase';
import pdfParse from 'pdf-parse';
import fetch from 'node-fetch';

export default async function parsePDF(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const token = req.headers.authorization?.split('Bearer ')[1];
  console.log('Token:', req.headers.authorization);
  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  try {
    // Verify the token
      const decodedToken = await admin.auth().verifyIdToken(token);


    // Token is valid, proceed with the PDF parsing
    const { fileUrl, title } = req.body;
    const storageRef = ref(storage, fileUrl);

    const downloadURL = await getDownloadURL(storageRef);
    const response = await fetch(downloadURL);
    const buffer = await response.buffer();

    const data = await pdfParse(buffer);

    await addDoc(collection(firestore, 'pdfs'), {
      name: title,
      text: data.text
    });

    res.status(200).json({ message: 'PDF parsed and data stored in Firestore' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error processing request' });
  }
}
