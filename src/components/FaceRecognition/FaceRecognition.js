import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img
          alt=''
          height='auto'
          id='inputimage'
          src={imageUrl}
          width='500px'
        />
        <div
          className='bounding-box'
          style={{
            bottom: box.bottomRow,
            left: box.leftCol,
            right: box.rightCol,
            top: box.topRow,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
