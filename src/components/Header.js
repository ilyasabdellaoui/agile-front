import React from 'react';
import ensias from '../images/ensias.png';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div>
        <h1 style={titleStyle}>Bienvenue $user$ (administrateur)</h1>
      </div>
      <div>
        <img src={ensias} alt="Logo" style={logoStyle} />
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: 'white',
  color: 'black',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  borderBottom: '2px solid black',
};

const logoStyle = {
  width: '50px',
  height: '50px',
};

const titleStyle = {
  margin: 0,
};

export default Header;
