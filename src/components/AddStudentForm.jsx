import React, { useState } from 'react';

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [attendance, setAttendance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || grade === '' || attendance === '') return;

    const newStudent = {
      id: Date.now(),
      name,
      grade: Number(grade),
      attendance: Number(attendance),
      active: true
    };

    onAddStudent(newStudent);
    setName('');
    setGrade('');
    setAttendance('');
  };

  return (
    <form className="add-student-form" onSubmit={handleSubmit}>
      <h3>הוספת תלמידה חדשה</h3>
      <input
        type="text"
        placeholder="שם התלמידה"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="ציון"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="מספר שיעורי נוכחות"
        value={attendance}
        onChange={(e) => setAttendance(e.target.value)}
        required
      />
      <button type="submit">הוסף תלמידה</button>
    </form>
  );
}

export default AddStudentForm;