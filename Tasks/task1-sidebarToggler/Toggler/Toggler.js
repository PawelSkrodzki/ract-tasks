import { React, useContext } from 'react';
import { AppContext } from '../Task1';

const Toggler = () => {
  const { actions, state } = useContext(AppContext);
  return (
    <button
      className="buttonToggler"
      onClick={() => {
        actions.setSidebarState(!state.isSidebarOpen);
      }}
    >
      {state.isSidebarOpen ? 'close' : 'open'}
    </button>
  );
};

export default Toggler;
