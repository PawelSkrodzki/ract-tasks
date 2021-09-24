import React, { useState, useEffect, useCallback } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import data from './data';
import './index.css';

const initialState = {
  loading: true,
  tours: [],
  tourToDelete: false,
};

const getTours = new Promise((res) => {
  setTimeout(() => {
    res(data);
  }, 200);
});

// Test memo
const TestMemo = React.memo(() => {
  return <h2>Memo test</h2>;
});

const useToursLogic = () => {
  const [state, setter] = useState(initialState);

  const { loading, tours, tourToDelete } = state;

  const fetchObjects = () => {
    getTours.then((data) => {
      setter({ loading: false, tours: data });
    });
  };

  const removeTour = useCallback(
    ({ id }) => {
      const newTour = tours.filter((tour) => tour.id !== id);
      setter({ loading: false, tours: newTour, tourToDelete: true });
    },
    [tours],
  );

  useEffect(() => {
    fetchObjects();
  }, []);

  return { fetchObjects, removeTour, loading, tours, tourToDelete };
};

function Task2() {
  const { fetchObjects, removeTour, loading, tours, tourToDelete } = useToursLogic();

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <>
        <h1>No Tours Left</h1>
        <button onClick={() => fetchObjects()}>Od nowa</button>
      </>
    );
  }
  return (
    <>
      <Tours tours={tours} removeTour={removeTour} tourToDelete={tourToDelete} />
      <TestMemo />
    </>
  );
}

export default Task2;
