import React, { useState } from 'react';
import { storage } from './firebase'

const FileUpload = () => {
  const [file, setFile] = useState(null);
  
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`pdfs/${file.name}`).put(file);
    uploadTask.on(
      'state_changed',
      snapshot => { /* ... */ },
      error => { console.error(error); },
      () => {
        storage
          .ref('pdfs')
          .child(file.name)
          .getDownloadURL()
          .then(url => { console.log(url); });
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleChange} accept="application/pdf" />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
