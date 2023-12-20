import React from 'react';

const Sidebar = ({ children }) => {
  return (
    <aside className="sidebar">
      <h2>Sidebar</h2>
      <div className="sidebar-content">{children}</div>
    </aside>
  );
};

export default Sidebar;
