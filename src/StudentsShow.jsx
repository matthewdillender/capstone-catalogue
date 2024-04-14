import React from "react";

export function StudentsShow(props) {
  return (
    <div>
      <h1>Student Information</h1>
      <p>Name: {props.student.name}</p>
      <p>Capstone Project Name: {props.student.capstone_project_name}</p>
      <p>Description: {props.student.description}</p>
      <img src={props.student.screenshot} alt={props.student.capstone_project_name} />
    </div>
  );
}
