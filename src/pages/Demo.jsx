import React, { useState } from 'react';

const Demo = () => {
  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    
    if (files.length + images.length > 6) {
      alert("You can only upload up to 6 images.");
      return;
    }
    
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        disabled={images.length >= 6}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <img
              src={URL.createObjectURL(image)}
              alt={`preview ${index}`}
              width="100"
              height="100"
            />
            <button onClick={() => handleRemoveImage(index)}>Remove</button>
          </div>
        ))}
      </div>
      {images.length >= 6 && <p>You have reached the maximum number of uploads (6).</p>}
    </div>
  );
};

export default Demo
