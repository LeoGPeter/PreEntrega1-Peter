import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>Electro Mundo</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to={`/category/Tv y Audio`}>
                Tv y Audio
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={`/category/Electrodomestico`}>
                Electrodomestico
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={`/category/Tecnologia`}>
                Tecnologia
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={`/category/Hogar`}>
                Hogar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  )
};