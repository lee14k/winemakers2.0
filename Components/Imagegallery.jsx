import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from './Spinner';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Imagegallery() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null); // Initialize as null
  const [categorizedMedia, setCategorizedMedia] = useState({});
  const [activeTab, setActiveTab] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('/api/images');
        setCategorizedMedia(response.data);
        setActiveTab(Object.keys(response.data)[0]);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleOpenModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex => prevIndex < categorizedMedia[activeTab].length - 1 ? prevIndex + 1 : prevIndex);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : prevIndex);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentImageIndex(null); // Reset to null
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Ensure activeTab and categorizedMedia are correctly set
  if (!activeTab || !categorizedMedia[activeTab]) {
    return null;
  }

  const activeImages = categorizedMedia[activeTab];

  return (
    <div className="gallerycontainer">
      <div className="container">
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
                      : 'border-transparent hover:border-gray-300 hover:text-gray-700',
                    'w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium'
                  )}
                >
                  {folderName}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {Object.keys(categorizedMedia).map((folderName) => (
          folderName === activeTab && (
            <div key={folderName} className="gallery">
              {categorizedMedia[folderName].map((item, index) => (
                <figure key={item.id} className={`gallery__item gallery__item--${item.id}`}>
                  <img
                    src={item.source_url}
                    alt={item.alt_text}
                    className="gallery__img"
                    onClick={() => handleOpenModal(index)}
                  />
                </figure>
              ))}
            </div>
          )
        ))}
      </div>

      {isModalOpen && currentImageIndex !== null && (
        <div className="modal ">
          <span className="close" onClick={handleCloseModal}>&times;</span>
            {currentImageIndex > 0 && (
            <button onClick={handlePreviousImage} className="modal-prev text-xl text-white">Previous</button>
          )}
          <img 
            className="modal-content " 
            src={activeImages[currentImageIndex]?.source_url} // Use optional chaining
            alt="modal" 
          />
        
          {currentImageIndex < categorizedMedia[activeTab].length - 1 && (
            <button onClick={handleNextImage} className="modal-next text-xl text-white">Next</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Imagegallery;
