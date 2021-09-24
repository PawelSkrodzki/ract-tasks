import React from 'react';
import Tour from './Tour';
import './index.css';

const Tours = ({ tours, removeTour, tourToDelete }) => {
  return (
    <>
      <Tour toursList={tours} removeTour={removeTour} tourToDelete={tourToDelete} />
    </>
  );
};

export default Tours;
