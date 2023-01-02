import React from "react";
import { Container, Table } from "react-bootstrap";
import useStudents from "../Hooks/useStudents";
import DBoardStudents from "./DBoardStudents/DBoardStudents";

const Dashboard = () => {
  const { students } = useStudents();
  return (
    <Container fluid>
      <h1 className="fs-1 fw-bold py-5 text-primary">Dashboard</h1>
      <section>
        <Container fluid>
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Batch</th>
                <th>Attendance</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <DBoardStudents key={student?._id} student={student} />
              ))}
            </tbody>
          </Table>
        </Container>
      </section>
    </Container>
  );
};

export default Dashboard;
