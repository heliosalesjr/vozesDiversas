'use client'
import React from 'react';

const BackgroundImage = ({ images }) => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div
      className="h-screen w-screen absolute top-0 left-0"
      style={{
        backgroundImage: `url(${randomImage.path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-white text-sm absolute bottom-0 right-0 p-2">
        {randomImage.info}
      </div>
    </div>
  );
};

export default BackgroundImage;