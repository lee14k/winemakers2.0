import formidable from 'formidable';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import pdfParse from 'pdf-parse';

// Initialize Firebase
const firebaseConfig = {
apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const storage = getStorage(app);
const db = getFirestore(app);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: 'Error parsing the file upload' });
      return;
    }

    const file = files.file; // Assuming 'file' is the name of the field in your form
    const fileData = await fs.promises.readFile(file.filepath);

    try {
      // Upload PDF to Firebase Storage
      const storageRef = ref(storage, `pdfs/${file.originalFilename}`);
      await uploadBytesResumable(storageRef, fileData);
      const downloadURL = await getDownloadURL(storageRef);

      // Extract text from the PDF
      const data = await pdfParse(fileData);

      // Store metadata in Firestore
      await addDoc(collection(db, 'pdfs'), {
        name: file.originalFilename,
url: this.routeUrl + ".json",
        text: data.text
      });

      res.status(200).json({ message: `Uploaded and indexed ${file.originalFilename}` });
    } catch (error) {
      console.error(`Error processing file:`, error);
      res.status(500).json({ error: `Error processing file` });
    }
  });
};
