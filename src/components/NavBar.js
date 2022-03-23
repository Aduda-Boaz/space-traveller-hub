import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import planet from '../resources/planet.png';

function NavBar() {
  return (
    <Navbar expand="xxl" sticky="top" variant="light" bg="light" className="border-bottom Navbar">
      <Container>
        <LinkContainer to="/" className="Logo-Container Nav-Link" rel="noopener noreferrer">
          <Navbar.Brand>
            <img src={planet} alt="Planet logo" className="Logo" />
            Space Travelers&apos; Hub
          </Navbar.Brand>
        </LinkContainer>
        <div className="ms-auto d-flex">
          <LinkContainer to="/" rel="noopener noreferrer" className="Nav-Link">
            <Nav.Link>Rockets</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/Missions/" className="Nav-Link" rel="noopener noreferrer">
            <Nav.Link>Missions</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/Profile/" className="Nav-Link" rel="noopener noreferrer">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
        </div>
      </Container>

    </Navbar>

  );
}

export default NavBar;
