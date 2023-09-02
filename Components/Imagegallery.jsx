'use client'
import "./Imagegallery.css";
import React, { useState } from "react";
function Imagegallery() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleOpenModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setCurrentImage("");
    setModalOpen(false);
  };

  return (
    <div className="gallerycontainer">
      <div className="container">
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img
              src="/two.jpg"
              alt="Gallery image 1"
              className="gallery__img"
              onClick={() => handleOpenModal("/two.jpg")}
            />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img
              src="/three.jpg"
              alt="Gallery image 2"
              className="gallery__img"
              onClick={() => handleOpenModal("/three.jpg")}
            />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img
              src="/eleven.jpg"
              alt="Gallery image 3"
              className="gallery__img"    
              onClick={() => handleOpenModal("/eleven.jpg")}
            />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img
              src="/ten.jpg"
              alt="Gallery image 4"
              className="gallery__img"
              onClick={() => handleOpenModal("/ten.jpg")}
            />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img
              src="/four.jpg"
              alt="Gallery image 5"
              className="gallery__img"
              onClick={() => handleOpenModal("/four.jpg")}
            />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img
              src="/twelve.jpg"
              alt="Gallery image 6"
              className="gallery__img"
              onClick={() => handleOpenModal("/twelve.jpg")}
            />
          </figure>
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