import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';

const Menu = () => {
    return(
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Rick & Morty API</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Login">Sign In</Nav.Link>
            <Nav.Link as={Link} to="/Registration">Sing Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;