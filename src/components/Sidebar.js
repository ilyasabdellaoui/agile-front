import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-white text-dark" style={sidebarStyle}>
      <h4 className="text-center mb-4">Gestion du référentiel</h4>
      <ul className="list-unstyled">
        {navItems.map((item, index) => (
          <li key={index} className="mb-2">
            <a 
              href={item.link} 
              className="text-dark text-decoration-none" 
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const sidebarStyle = {
  width: '200px',
  height: '100vh',
  borderRight: '2px solid black',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
};


const navItems = [
  { label: 'Enseignants', link: '/' },
  { label: 'Etudiants', link: '/admin/etudiants' },
  { label: 'Classes', link: '/admin/classes' },
  { label: 'Matières', link: '/admin/matieres' },
  { label: 'Planification', link: '/admin/planification' },
];

export default Sidebar;