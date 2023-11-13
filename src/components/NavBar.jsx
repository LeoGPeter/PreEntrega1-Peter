import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { CartWidget } from './CartWidget';

import { products } from '../../data/products';

const categories = products.map((item) => item.category);
const uniqueCategories = new Set(categories);

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
            <NavLink to="/">
              <Nav.Link>Home</Nav.Link>
            </NavLink>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {[...uniqueCategories].map((item) => (
              <NavDropdown.Item as={NavLink} key={item} to={`/category/${item}`}>
                {item}
                </NavDropdown.Item>))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  )
}