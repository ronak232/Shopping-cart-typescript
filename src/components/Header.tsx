import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useRef, useState } from "react";
import {
  IProduct,
  searchFilterProduct,
} from "../store/redux/features/Productslice/ProductSlices";

export const Header = () => {
  const { cartItems } = useSelector((state: RootState) => state.cartItems);
  const { products } = useSelector((state: RootState) => state.products);

  const inputElement = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  // we can pass the generic type to useState to update the DOM element based on type
  const [searchProducts, setSearchProducts] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleSearchProducts = (): void => {
    setSearchProducts(inputElement.current?.value ?? "");

    if (searchProducts !== "") {
      dispatch(searchFilterProduct(searchProducts));
    }
    else{
      products
    }
  };

  return (
    <Navbar className="navbar-expand-lg navbar-light bg-light bg-white shadow mb-3">
      <Container className="justify-content-space">
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
        <div>
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
            <Button className="position-relative" title="Cart">
              <span
                className="rounded bg-danger circle"
                style={{ width: "1.2rem", height: "1rem" }}
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
