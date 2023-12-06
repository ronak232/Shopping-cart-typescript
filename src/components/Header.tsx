import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useRef, useState } from "react";
import {
  IProduct,
  searchFilterQuery,
} from "../store/redux/features/Productslice/ProductSlices";

export const Header = () => {
  const { cartItems } = useSelector((state: RootState) => state.cartItems);

  const inputElement = useRef<HTMLInputElement | null>(null);

  const [searchProducts, setSearchProducts] = useState<string>(""); // we can pass the generic type to useState to update the DOM element based on type

  const [filterSearchProducts, setFilterSearchProducts] = useState([]);
  const [filterSearchResult, setfilterSearchResult] = useState([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleSearchProducts = (): void => {
    setSearchProducts(inputElement.current?.value ?? "");
    
  };

  return (
    <Navbar className="navbar-expand-lg shadow-lg m-0 bg-cyan-50">
      <Container>
        <div className="flex items-center">
          <div>
            <a className="navbar-brand h-full" href="/">
              <img
                src="./src/assets/images/Shopping Bag.svg"
                alt="Logo"
                height="50"
                className="d-inline-block align-text-top"
                style={{ width: "100%", height: "40px" }}
              />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Navbar>
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
          </Navbar>
        </div>
        <div className="d-flex align-items-center justify-content-space">
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              ref={inputElement}
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchProducts}
              onChange={handleSearchProducts}
            />
          </form>
          <Nav.Link to="/cart" as={NavLink}>
            <Button className="position-relative mx-2 p-2" title="Cart">
              <span
                className="rounded-full bg-danger qty-circle p-1"
              >
                {cartItems.length}
              </span>
              <BiCartAlt />
            </Button>
          </Nav.Link>
          <Nav.Link to="/" as={NavLink} className="">
            Sign in
          </Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
};
