import React, { useState } from "react";

function Imagegallery({ categorizedMedia }) {
  console.log(mediaItems);

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentCategory, setCurrentCategory] = useState("Category1"); // default category

  const handleOpenModal = (image) => {
    setCurrentImage(image.source_url); // Use source_url, which is the URL of the media item in WordPress
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setCurrentImage("");
    setModalOpen(false);
  };

  return (
    <div className="gallerycontainer">
      <div className="container">
        {/* Category Tabs */}
        <div className="tabs">
          {Object.keys(categorizedMedia).map(category => (
            <button onClick={() => setCurrentCategory(category)}>
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="gallery">
          {categorizedMedia[currentCategory].map((item, index) => (
            <figure className={`gallery__item gallery__item--${index + 1}`} key={item.id}>
              <img
                src={item.source_url}
                alt={item.alt_text}
                className="gallery__img"
                onClick={() => handleOpenModal(item)}
              />
            </figure>
          ))}
        </div>
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
