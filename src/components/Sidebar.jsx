import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : ''}>
            דשבורד
          </NavLink>
        </li>
        <li>
          <NavLink to="/students" className={({ isActive }) => isActive ? 'active-link' : ''}>
            כל התלמידים
          </NavLink>
        </li>
        <li>
          <NavLink to="/excellent" className={({ isActive }) => isActive ? 'active-link' : ''}>
            תלמידים מצטיינים
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;