/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CapstonesIndex } from "./CapstonesIndex";
import { StudentsShow } from "./StudentsShow"; // Corrected import statement
import { Modal } from "./Modal";

const students = [
  {
    name: "John Doe",
    capstone_project_name: "Online Marketplace",
    screenshot: "https://img.freepik.com/free-vector/gradient-instagram-shop-logo-template_23-2149680701.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis justo sed elit sagittis tempor eu et felis. Sed ornare massa ut aliquam consequat. Sed sed ipsum lectus. Fusce vulputate, ipsum eu dictum ultricies, nunc ligula condimentum velit, nec lacinia mi sapien vel est. Duis nec sem non nisi semper vulputate sit amet non nisi.",
  },
  // Other student data...
];

export function Content() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleCardMouseEnter = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleCardMouseLeave = () => {
    setSelectedStudent(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <CapstonesIndex students={students} />
      <StudentsShow student={selectedStudent} /> {/* Render the selected student */}
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {" "}
        {/* Corrected Modal component */}
        <StudentsShow student={selectedStudent} />
      </Modal>
    </div>
  );
}
