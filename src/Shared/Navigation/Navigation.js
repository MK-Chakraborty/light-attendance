import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/" className="text-uppercase text-decoration-none">
          <h3> Attendance Log </h3>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              to="/addStudents"
              className="text-decoration-none pt-1 px-3 fs-5"
            >
              Add Students
            </NavLink>
            <Button>Sign In</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
