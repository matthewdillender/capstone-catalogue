/* eslint-disable react/prop-types */
export function CapstonesIndex(props) {
  return (
    <div className="card-grid">
      {props.students.map((student, index) => (
        <div className="card" key={index}>
          <h2>{student.capstone_project_name}</h2>
          <p>{student.name}</p>
          <img src={student.screenshot} alt={student.capstone_project_name} />
        </div>
      ))}
    </div>
  );
}
