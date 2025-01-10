import React, { useState } from 'react';
import { FaCloudUploadAlt, FaDownload } from 'react-icons/fa';
import './UploadImage.css';

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [cartoonImageUrl, setCartoonImageUrl] = useState(null);

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
    setCartoonImageUrl(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!image) {
      alert("Please select an image file.");
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setCartoonImageUrl(url);
      } else {
        alert('Failed to process image. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while uploading the image.');
    }
  };

  return (
    <div className="upload-container">
      <h1 className="title">
        <FaCloudUploadAlt className="title-icon" /> Cartoon Image Converter
      </h1>
      <form onSubmit={handleSubmit} className="upload-form">
        <label htmlFor="imageUpload" className="upload-label">
          <FaCloudUploadAlt className="upload-icon" /> Choose an Image:
        </label>
        <input
          type="file"
          id="imageUpload"
          className="upload-input"
          onChange={handleImageUpload}
          accept="image/*"
        />
        <button type="submit" className="convert-button">
          Convert to Cartoon
        </button>
      </form>

      {cartoonImageUrl && (
        <div className="result-container">
          <h2>Your Cartoon Image:</h2>
          <img
            src={cartoonImageUrl}
            alt="Cartoon version"
            className="cartoon-image"
          />
          <a href={cartoonImageUrl} download="cartoon_image.png">
            <button className="download-button">
              <FaDownload className="download-icon" /> Download Image
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
