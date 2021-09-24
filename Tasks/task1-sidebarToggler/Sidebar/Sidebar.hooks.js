import React from 'react';

const SidebarControler = () => {
  const [isSidebarOpen, setSidebarState] = React.useState(false);
  // we use same hook as in toggler but with different values

  return {
    state: {
      isSidebarOpen,
    },
    actions: {
      setSidebarState,
    },
  };
};

export default SidebarControler;
