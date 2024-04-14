/* eslint-disable react/prop-types */
export function CapstonesIndex(props) {
  return (
    <div>
      <h1>All Students</h1>
      {props.students.map((student) => (
        <div key={student.id}>
          <h2>{student.capstone_project_name}</h2>
          <p>
            {student.first_name} {student.last_name}
          </p>
          <img src={student.screenshot} alt={student.capstone_project_name} />
        </div>
      ))}
    </div>
  );
}
