import React from "react";
import { Button, Card } from "react-bootstrap";

const Student = ({ student }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>
          <p className="fs-5">Email: {student.email}</p>
          <p className="fs-5">Batch: {student.batch}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Student;
