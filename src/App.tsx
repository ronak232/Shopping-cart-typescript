import { Container } from "react-bootstrap";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/ProductsList";
import { About } from "./pages/About";
import { Header } from "./components/Header";
import { Cart } from "./pages/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
