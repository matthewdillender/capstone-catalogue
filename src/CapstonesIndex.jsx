import React, { useState } from "react";

export function CapstonesIndex({ students }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  let timeoutId;

  const handleCardMouseEnter = (student) => {
    timeoutId = setTimeout(() => {
      setSelectedStudent(student);
      setShowModal(true);
    }, 3000);
  };

  const handleCardMouseLeave = () => {
    clearTimeout(timeoutId);
    setShowModal(false);
  };

  return (
    <div className="card-grid">
      {students.map((student, index) => (
        <div
          className="card"
          key={index}
          onMouseEnter={() => handleCardMouseEnter(student)}
          onMouseLeave={handleCardMouseLeave}
        >
          <h2>{student.capstone_project_name}</h2>
          <p>{student.name}</p>
          <img src={student.screenshot} alt={student.capstone_project_name} />
          <button onClick={() => props.onShowStudent(student)}>More info</button>
        </div>
      ))}
      {showModal && selectedStudent && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedStudent.capstone_project_name}</h2>
            <p>{selectedStudent.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
