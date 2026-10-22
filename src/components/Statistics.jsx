import React from 'react';

function Statistics({ students }) {
  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.active).length;
  
  const averageGrade = totalStudents > 0
    ? (students.reduce((acc, s) => acc + s.grade, 0) / totalStudents).toFixed(1)
    : 0;

  return (
    <div className="statistics-card">
      <h3>נתונים סטטיסטיים</h3>
      <p>סה"כ תלמידות: <strong>{totalStudents}</strong></p>
      <p>תלמידות פעילות: <strong>{activeStudents}</strong></p>
      <p>ממוצע ציונים: <strong>{averageGrade}</strong></p>
    </div>
  );
}

export default Statistics;