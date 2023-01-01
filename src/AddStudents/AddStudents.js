import React, { useRef, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const AddStudents = () => {
  // const [attendanceCount, setAttendanceCount] = useState(0);

  // const handleAttendance = () => {
  //   let newCount = attendanceCount;
  //   newCount++;
  //   setAttendanceCount(newCount);
  // };

  const idRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const batchRef = useRef();
  const attendanceRef = useRef();

  const handleSubmit = (e) => {
    const id = idRef.current.value;
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const batch = batchRef.current.value;
    const attendance = attendanceRef.current.value;

    const newStudent = { id, name, email, batch, attendance };

    fetch("http://localhost:5000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success", data);
        if (data.insertedId) {
          alert("New User Added");
          e.target.reset();
        }
      });

    e.preventDefault();
  };

  return (
    <Container className="my-5">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridId">
            <Form.Label>Student Id</Form.Label>
            <Form.Control ref={idRef} placeholder="Enter ID" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} placeholder="Enter name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              ref={emailRef}
              placeholder="Enter email"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridBatch">
            <Form.Label>Batch</Form.Label>
            <Form.Control
              type="text"
              ref={batchRef}
              placeholder="Enter batch"
            />
          </Form.Group>

          <InputGroup as={Col}>
            <Form.Control
              type="number"
              value={0}
              min="0"
              ref={attendanceRef}
              placeholder="Attendance"
            />
            {/* <Button
              variant="outline-secondary"
              onClick={handleAttendance}
              id="button-addon2"
            >
              +
            </Button> */}
          </InputGroup>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddStudents;
