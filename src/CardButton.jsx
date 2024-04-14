import React, { useState } from "react";
import Modal from "./Modal";

function CardButton({ student }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="card" onClick={openModal}>
        <h2>{student.capstone_project_name}</h2>
        <p>{student.name}</p>
        <img src={student.screenshot} alt={student.capstone_project_name} />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={student.capstone_project_name}
        description={student.description}
      />
    </>
  );
}

export default CardButton;
