import React from "react";
import { Card } from "react-bootstrap";

const Student = ({ student }) => {
  return (
    <Card style={{ width: "18rem" }} className="my-3">
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>
          <p className="fs-5">Email: {student.email}</p>
          <p className="fs-5">Batch: {student.batch}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Student;
