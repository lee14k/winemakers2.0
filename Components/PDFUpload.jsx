import React, { useState } from 'react';

const PDFUpload = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('collection', 'pdfs'); // This specifies the target collection

    try {
      const response = await fetch('/api/uploadPDF', { // Specific endpoint for newsletters
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data); // Log or handle the response
    } catch (error) {
      console.error('Upload failed:', error);
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
