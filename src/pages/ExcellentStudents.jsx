import React, { useState, useEffect } from 'react';
import StudentList from '../components/StudentList';
import { initialStudents } from '../data/students';

function ExcellentStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const excellent = initialStudents.filter(s => s.grade >= 90);
    setStudents(excellent);
  }, []);

  return (
    <div className="excellent-students">
      <h2>תלמידות מצטיינות</h2>
      <StudentList students={students} />
    </div>
  );
}

export default ExcellentStudents;