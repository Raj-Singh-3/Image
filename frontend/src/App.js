import React, { useState, useEffect } from 'react';
import UploadImage from './components/UploadImage';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showSplash ? (
        <div className="splash-screen">
          <div className="splash-content">
            <h1 className="splash-title">
              Welcome to <span className="highlight">Image Converter</span>
            </h1>
            <p className="splash-subtitle">
              Turn your photos into stunning cartoon images instantly!
            </p>
            <img
              src="https://plugins-media.makeupar.com/smb/blog/post/2023-03-28/249e1beb-be5e-46cc-b839-ba0227c97545.jpg"
              alt="Cartoon Illustration"
              className="splash-image"
            />
          </div>
        </div>
      ) : (
        <UploadImage />
      )}
    </div>
  );
}

export default App;
