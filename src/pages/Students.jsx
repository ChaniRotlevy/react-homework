import React, { useState, useEffect } from 'react';
import StudentList from '../components/StudentList';
import { initialStudents } from '../data/students';

function Students() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setStudents(initialStudents);
  }, []);

  const filteredStudents = students.filter(student =>
    student.name.includes(searchTerm)
  );

  return (
    <div className="students-page">
      <h2>רשימת תלמידות</h2>
      <input
        type="text"
        placeholder="חפש לפי שם..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <StudentList students={filteredStudents} />
    </div>
  );
}

export default Students;