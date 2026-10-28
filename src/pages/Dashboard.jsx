import React, { useState, useEffect } from 'react';
import Statistics from '../components/Statistics';
import StudentList from '../components/StudentList';
import { initialStudents } from '../data/students';

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(initialStudents);
  }, []);

  return (
    <div className="dashboard">
      <h2>דשבורד ראשי</h2>
      <Statistics students={students} />
      <StudentList students={students} />
    </div>
  );
}

export default Dashboard;