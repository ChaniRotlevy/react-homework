import React, { useState } from 'react';
import Header from './Header';
import Statistics from './Statistics';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm'; 
import { initialStudents } from '../data/students';
function Dashboard() {
  const [students, setStudents] = useState(initialStudents);
  const [filterActiveOnly, setFilterActiveOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showStats, setShowStats] = useState(true);
  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.includes(searchTerm);
    const matchesActive = filterActiveOnly ? student.active : true;
    return matchesSearch && matchesActive;
  });

  return (
    <div className="dashboard">
      <Header />
      <AddStudentForm onAddStudent={handleAddStudent} />
      <div className="controls">
        <button onClick={() => setShowStats(!showStats)}>
          {showStats ? 'הסתר סטטיסטיקה' : 'הצג סטטיסטיקה'}
        </button>
        <button onClick={() => setFilterActiveOnly(false)}>הצג את כל התלמידות</button>
        <button onClick={() => setFilterActiveOnly(true)}>הצג פעילות בלבד</button>
        <input
          type="text"
          placeholder="חפש לפי שם..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {showStats && <Statistics students={students} />}
      <StudentList students={filteredStudents} />
    </div>
  );
}

export default Dashboard;