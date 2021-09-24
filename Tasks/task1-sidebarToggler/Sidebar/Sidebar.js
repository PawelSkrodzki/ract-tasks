import { React, useContext } from 'react';
import '../index.css';
import { AppContext } from '../Task1';

// /Sidebar
// index.js

// Sidebar.js
// Sidebar.hooks.js
// Sidebar.styles.js
// Sidebar.components.js

const variant = {
  open: { left: '0px' },
  close: { left: '-50%' },
};

const Sidebar = () => {
  const { state } = useContext(AppContext);
  return (
    <nav className="nav" style={state.isSidebarOpen ? variant.open : variant.close}>
      <ul className="nav-list">
        <li className="nav-item">Projects</li>
        <li className="nav-item">About Us</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
