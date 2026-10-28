import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function MainLayout() {
  return (
    <div className="app-layout">
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;