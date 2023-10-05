import { Container } from "react-bootstrap";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/ProductPage";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
