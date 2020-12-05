import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Pookan</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <NavDropdown title="React Project" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/card_list">
                Project 1 - Front-end fun with list of cards
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/wizard_form">
                Project 2 - Getting Complex With Wizard Form
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/auto_complete">
                Project 3 - Search Auto Complete
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/search_filter">
                Project 5 - Search and Filter List Records
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/sample_form">
                Project 6 - Search and Filter List Records
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/validated_form">
                Project 7 - Form Validation
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}

export default NavBar;