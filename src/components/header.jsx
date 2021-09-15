import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Header() {
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Covid19</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Dashboard</Nav.Link>
              <Nav.Link href="#pricing">Login</Nav.Link>
              <NavDropdown title="Useful Links" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Report</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Covid vaccine
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                    Vaccine Registration
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Others
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
