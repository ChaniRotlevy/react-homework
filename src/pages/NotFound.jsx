import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - העמוד לא נמצא</h2>
      <p>הנתיב המבוקש אינו קיים.</p>
      <Link to="/">חזרה לדשבורד</Link>
    </div>
  );
}

export default NotFound;