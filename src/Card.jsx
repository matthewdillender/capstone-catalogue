// import React, { useState } from "react";

// export function studentCard({ student }) {
//   const [showDescription, setShowDescription] = useState(false);
//   let timeoutId;

//   const handleMouseEnter = () => {
//     timeoutId = setTimeout(() => {
//       setShowDescription(true);
//     }, 3000); // Show description after 3 seconds
//   };

//   const handleMouseLeave = () => {
//     clearTimeout(timeoutId); // Clear the timeout if mouse leaves before 3 seconds
//     setShowDescription(false);
//   };

//   return (
//     <div className="student-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <img src={student.screenshot} alt={student.capstone_project_name} />
//       <h2>{student.capstone_project_name}</h2>
//       {/* Conditionally render the description based on showDescription state */}
//       {showDescription && <p>{student.description}</p>}
//     </div>
//   );
// }
