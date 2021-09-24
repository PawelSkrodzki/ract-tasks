import React, { useState, useMemo } from 'react';
import './index.css';

const Tour = ({ toursList, removeTour }) => {
  return (
    <div className="main-container">
      {useMemo(() => {
        return toursList.map((tour) => (
          <article key={tour.id} className="single-tour">
            <img src={tour.image} alt="img" />
            <div className="flex-wrapper">
              <h2>{tour.name}</h2>
              <h3>{tour.price}$</h3>
            </div>
            <p>{tour.info}</p>
            <button onClick={() => removeTour(tour)}>Not Inerested</button>
          </article>
        ));
      }, [toursList])}
    </div>
  );
};

export default Tour;
