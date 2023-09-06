import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Imagegallery() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [categorizedMedia, setCategorizedMedia] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/images');
      setCategorizedMedia(response.data);
    };

    fetchData();
  }, []);

  const handleOpenModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setCurrentImage('');
    setModalOpen(false);
  };

  return (
    <div className="gallerycontainer">
      {/* The rest of your component stays the same. Replace `categorizedMedia` with the state variable. */}
      <div className="container">
        {/* Create Tabs */}
        <div className="tabs">
          {Object.keys(categorizedMedia).map((folderName) => (
            <button key={folderName}>{folderName}</button>
          ))}
        </div>
        
        {/* Create Image Gallery under each tab */}
        {Object.keys(categorizedMedia).map((folderName) => (
          <div key={folderName} className="gallery">
            {categorizedMedia[folderName].map((item) => (
              <figure key={item.id} className={`gallery__item gallery__item--${item.id}`}>
                <img
                  src={item.source_url} // make sure this is the correct field
                  alt={item.alt_text} // make sure this is the correct field
                  className="gallery__img"
                  onClick={() => handleOpenModal(item.source_url)}
                />
              </figure>
            ))}
          </div>
        ))}

      </div>
      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={handleCloseModal}>
            &times;
          </span>
          <img className="modal-content" src={currentImage} alt="modal" />
        </div>
      )}
    </div>
  );
}

export default Imagegallery;
