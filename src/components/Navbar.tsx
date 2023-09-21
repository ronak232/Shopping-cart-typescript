import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {BiCartAlt} from "react-icons/bi"

export const CartNavbar = () => {
  return (
    <Navbar className="bg-white shadow mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button className="position-relative">
             <span className="rounded bg-danger circle" style={{width:"1.2rem", height:"1rem"}}>7</span>
            <BiCartAlt/>
        </Button>
      </Container>
    </Navbar>
  );
};
