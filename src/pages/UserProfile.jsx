import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUserByIdAxios } from '../services/userApi.services';

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserByIdAxios(id)
      .then(setUser)
      .catch(() => setError('המשתמש לא נמצא'));
  }, [id]);

  if (error) {
    return (
      <div className="not-found">
        <p>{error}</p>
        <Link to="/users">חזרה לרשימה</Link>
      </div>
    );
  }

  if (!user) return <p>טוען...</p>;

  return (
    <div className="student-details">
      <h2>{user.firstName} {user.lastName}</h2>
      <p>אימייל: {user.email}</p>
      <p>גיל: {user.age}</p>
      <p>טלפון: {user.phone}</p>
      <Link to="/users">חזרה לרשימה</Link>
    </div>
  );
}

export default UserProfile;