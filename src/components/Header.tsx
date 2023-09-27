import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";

export const Header = () => {
  return (
    <Navbar className="bg-white shadow mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink} title="Home">
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink} title="Store">
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink} title="About Page">
            About
          </Nav.Link>
        </Nav>
        <Nav.Link to="/cart" as={NavLink}>
          <Button className="position-relative" title="Cart">
            <span
              className="rounded bg-danger circle"
              style={{ width: "1.2rem", height: "1rem" }}
            >
              7
            </span>
            <BiCartAlt />
          </Button>
        </Nav.Link>
      </Container>
    </Navbar>
  );
};
