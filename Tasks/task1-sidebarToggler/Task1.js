import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import SidebarControler from './Sidebar/Sidebar.hooks';
import Toggler from './Toggler/Toggler';

export const AppContext = React.createContext();

// tworzymy konteskt, który zawiera wszystkie elementy sidebara i jest dostarczany do aplikacji jako wrapper

function Task1() {
  const toProvide = SidebarControler();

  return (
    <AppContext.Provider value={toProvide}>
      <Toggler></Toggler>
      <Sidebar></Sidebar>
    </AppContext.Provider>
  );
}

export default Task1;
