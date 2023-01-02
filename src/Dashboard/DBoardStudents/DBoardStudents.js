import React from "react";
import { Button, Container, Table } from "react-bootstrap";

const DBoardStudents = ({ student }) => {
  return (
    <tr>
      <td>{student?.id}</td>
      <td>{student?.name}</td>
      <td>{student?.email}</td>
      <td>{student?.batch}</td>
      <td>{student?.attendance}</td>
      <td className="d-flex">
        <Button className="me-2" variant="warning">
          Update
        </Button>{" "}
        <Button variant="danger">Delete</Button>{" "}
      </td>
    </tr>
  );
};

export default DBoardStudents;
