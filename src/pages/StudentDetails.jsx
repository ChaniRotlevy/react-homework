import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { initialStudents } from '../data/students';

function StudentDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const foundStudent = initialStudents.find(s => s.id === Number(id));
    setStudent(foundStudent);
  }, [id]);

  if (!student) {
    return (
      <div>
        <p>תלמידה לא נמצאה.</p>
        <Link to="/students">חזרה לרשימה</Link>
      </div>
    );
  }

  return (
    <div className="student-details">
      <h2>פרטי תלמידה</h2>
      <p>מזהה: {student.id}</p>
      <p>שם: {student.name}</p>
      <p>ציון: {student.grade}</p>
      <p>נוכחות: {student.attendance}</p>
      <p>סטטוס: {student.active ? 'פעילה' : 'לא פעילה'}</p>
      <Link to="/students">חזרה לרשימת תלמידות</Link>
    </div>
  );
}

export default StudentDetails;