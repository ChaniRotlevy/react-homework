import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const linkClass = ({ isActive }) => (isActive ? 'active-link' : '');

  return (
    <nav className="sidebar">
      <ul>
        <li><NavLink to="/" end className={linkClass}>דשבורד</NavLink></li>
        <li><NavLink to="/students" className={linkClass}>כל התלמידות</NavLink></li>
        <li><NavLink to="/excellent" className={linkClass}>תלמידות מצטיינות</NavLink></li>
        <li><NavLink to="/users" className={linkClass}>משתמשים</NavLink></li>
      </ul>
    </nav>
  );
}

export default Sidebar;