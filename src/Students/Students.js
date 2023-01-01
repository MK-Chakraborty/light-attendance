import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Student from "./Student/Student";

const Students = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <Container>
      <h1 className="fs-1 fw-bold py-5 text-primary">Current List</h1>
      <section className="d-flex flex-wrap justify-content-evenly">
        {students.map((student) => (
          <Student key={student?._id} student={student} />
        ))}
      </section>
    </Container>
  );
};

export default Students;
