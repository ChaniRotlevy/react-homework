import React from 'react';
import { Link } from 'react-router-dom';

function StudentCard({ student }) {
  return (
    <div className={`student-card ${!student.active ? 'inactive' : ''}`}>
      <h3>{student.name}</h3>
      <p>ציון: {student.grade}</p>
      <p>נוכחות: {student.attendance} שיעורים</p>
      <p>סטטוס: {student.active ? 'פעילה' : 'לא פעילה'}</p>
      {student.grade >= 90 && <div className="badge excel">מצטיינת</div>}
      {student.grade < 60 && <div className="badge improve">נדרש שיפור</div>}
      <Link to={`/students/${student.id}`}>לצפייה בפרטים</Link>
    </div>
  );
}

export default StudentCard;