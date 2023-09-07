import React, { useState, useEffect } from 'react';
import axios from 'axios';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Imagegallery() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [categorizedMedia, setCategorizedMedia] = useState({});
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/images');
      setCategorizedMedia(response.data);
      setActiveTab(Object.keys(response.data)[0]);  // Set the first folder as the active tab
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
      <div className="container">
        {/* Tabs */}
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex" aria-label="Tabs">
              {Object.keys(categorizedMedia).map((folderName) => (
                <button
                  key={folderName}
                  onClick={() => setActiveTab(folderName)}
                  className={classNames(
                    folderName === activeTab
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium'
                  )}
                >
                  {folderName}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Image Gallery */}
        {Object.keys(categorizedMedia).map((folderName) => (
          folderName === activeTab && (
            <div key={folderName} className="gallery">
              {categorizedMedia[folderName].map((item) => (
                <figure key={item.id} className={`gallery__item gallery__item--${item.id}`}>
                  <img
                    src={item.source_url}
                    alt={item.alt_text}
                    className="gallery__img"
                    onClick={() => handleOpenModal(item.source_url)}
                  />
                </figure>
              ))}
            </div>
          )
        ))}

      </div>

      {/* Modal */}
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
