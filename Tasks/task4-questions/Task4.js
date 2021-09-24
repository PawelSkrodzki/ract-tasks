import React from 'react';
import data from './data';
import Question from './Question';

function Task4() {
  return (
    <>
      <h2>questions and answers about login</h2>
      {data.map((singleData) => (
        <Question key={singleData.id} {...singleData} />
      ))}
    </>
  );
}

export default Task4;
