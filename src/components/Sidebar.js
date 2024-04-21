import React from 'react';

const Sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <h2>Navigation</h2>
      <ul style={listStyle}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
};

const sidebarStyle = {
  backgroundColor: 'white',
  color: 'black',
  width: '200px',
  height: '100vh',
  borderRight: '2px solid black',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

export default Sidebar;
