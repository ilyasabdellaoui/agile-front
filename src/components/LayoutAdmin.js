import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const LayoutAdmin = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100vh'}}>
    <Header />
    <div style={{ display: 'flex', flex: 1, overflow: 'auto'}}>
      <div style={{ position: 'sticky', top: 0, height: 'auto' }}>
        <Sidebar />
      </div>
      <div style={{ maxWidth: '80%', width: '100%', padding: '1rem', justifyContent: 'center'  }}>
        {children}
      </div>
    </div>
  </div>
);

export default LayoutAdmin;
