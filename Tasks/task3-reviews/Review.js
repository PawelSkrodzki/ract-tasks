import React, { useState, useEffect } from 'react';
import peopleArr from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import './index.css';

const initialState = {
  person: {},
  actualIndex: '',
};

// zapytać o use callback ponieważ w tym przypadku nie ma to sensu (?)

const useReviewLogic = () => {
  const [state, setter] = useState(initialState);
  let { person, actualIndex } = state;

  actualIndex = peopleArr.indexOf(person);

  useEffect(() => {
    setter({ person: peopleArr[0], actualIndex: actualIndex });
  }, []);

  const nextPerson = () => {
    console.log('nextPerson');
    if (actualIndex === peopleArr.length - 1) {
      const firstPeople = peopleArr[0];
      setter({ person: firstPeople });
    } else {
      let nextPerson = peopleArr[actualIndex + 1];
      setter({ person: nextPerson });
    }
  };

  const prevPerson = () => {
    console.log('prevPerson');
    if (actualIndex === 0) {
      const lastPeople = peopleArr[peopleArr.length - 1];
      setter({ person: lastPeople });
    } else {
      let prevPerson = peopleArr[actualIndex - 1];
      setter({ person: prevPerson });
    }
  };

  const getRandomPerson = () => {
    console.log('getRandomPerson');
    const getRandomIndex = () => Math.floor(Math.random() * (peopleArr.length - 1));
    const randomIndex = getRandomIndex();
    const randomPerson = peopleArr[randomIndex];
    if (actualIndex === randomIndex) {
      getRandomPerson();
    } else {
      setter({ person: randomPerson, actualIndex: randomIndex });
    }
  };

  return { nextPerson, prevPerson, getRandomPerson, person };
};

const Review = () => {
  const { nextPerson, prevPerson, getRandomPerson, person } = useReviewLogic();
  const { image, name, job, text } = person;
  console.log('Review');
  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt="123" />
        <span className="quote">
          <FaQuoteRight />
        </span>
      </div>
      <h3 className="author">{name}</h3>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={() => prevPerson()} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={() => nextPerson()} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => getRandomPerson()}>
        Suprise me
      </button>
    </article>
  );
};

export default Review;
