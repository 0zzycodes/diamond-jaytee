import React from 'react';
import './custom-button.scss';
const CustomButton = ({ showImage, children }) => {
  return (
    <button className={`${showImage ? 'inverted' : ''} custom-button`}>
      {children}
    </button>
  );
};

export default CustomButton;
